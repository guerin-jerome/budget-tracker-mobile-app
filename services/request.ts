const createInstance = (path: string, options: object, headers: object) => {
  const fetchOptions: RequestInit = {
    credentials: 'include',
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };
  return fetch(path, fetchOptions);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RequestReturn<T> = Promise<T | any>;

enum HttpStatus {
  INTERNAL_SERVER_ERROR = 500,
  BAD_REQUEST = 400,
  OK = 200,
}

class ErrorResponse extends Error {
  status?: HttpStatus;

  constructor(status: HttpStatus, message: string) {
    super(message);
    this.status = status;
  }
}

const request = async <T>(
  url: string,
  method: string,
  body?: object,
  headers: object = {},
): RequestReturn<T> => {
  const requestOptions =
    body !== undefined ? {method, body: JSON.stringify(body)} : {method};
  const instance = createInstance(url, requestOptions, headers);

  return instance.then(async response => {
    if (response.status === 200) {
      if (response.redirected) {
        return Promise.resolve(response.url);
      }
      if (response.headers?.get('content-type')?.includes('application/json')) {
        return response.json() as Promise<T>;
      }
      if (response.headers?.get('content-type')?.includes('application/pdf')) {
        return response.blob();
      }
      return response.text();
    }

    console.debug(response.status);

    throw new ErrorResponse(response.status, await response.text());
  });
};

export const getRequest = <T>(
  url: string,
  header: object = {},
): RequestReturn<T> => request<T>(url, 'GET', undefined, header);

export const postRequest = <T>(
  url: string,
  body: object,
  header: object = {},
): RequestReturn<T> => request<T>(url, 'POST', body, header);

export const patchRequest = <T>(
  url: string,
  body: object,
  header: object = {},
): RequestReturn<T> => request<T>(url, 'PATCH', body, header);

export const putRequest = <T>(
  url: string,
  body: object,
  header: object = {},
): RequestReturn<T> => request<T>(url, 'PUT', body, header);

export const deleteRequest = <T>(
  url: string,
  header: object = {},
): RequestReturn<T> => request<T>(url, 'DELETE', undefined, header);

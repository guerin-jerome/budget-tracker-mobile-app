const API = {
  baseUrl: '/api',
  authentication: {
    baseUrl: '/authentication',
    login: '/login',
    register: '/register',
  },
};

const authenticationUrl = `${API.baseUrl}${API.authentication.baseUrl}`;

export const loginUrl = `${authenticationUrl}${API.authentication.login}`;
export const registerUrl = `${authenticationUrl}${API.authentication.register}`;

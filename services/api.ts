const API = {
  baseUrl: '/api',
  authentication: {
    baseUrl: '/authentication',
    login: '/login',
  },
};

const authenticationUrl = `${API.baseUrl}${API.authentication.baseUrl}`;

export const loginUrl = `${authenticationUrl}${API.authentication.login}`;

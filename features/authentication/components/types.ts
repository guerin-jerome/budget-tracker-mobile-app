type AuthenticationMode = 'login' | 'register';

export type TAuthenticationContainer = {
  type: AuthenticationMode;
};

export type TAuthentication = {
  buttonText: string;
  linkText: string;
  type: AuthenticationMode;
};

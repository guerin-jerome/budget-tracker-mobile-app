import {Dispatch} from 'react';
import {TLoginActions} from './appForms/login/types';
import {TUserActions} from './user/types';
import {TAppFormsActions} from './appForms/types';

export type TUser = {
  id: string;
  name: string;
  email: string;
  password: string;
  creationDate: string;
};

export type TErrorForm = {
  message: string;
};

export type TAuthenticationMode = 'login' | 'register';

type TLoginForm = {
  email?: string;
  password?: string;
  errors?: TErrorForm;
};

type TRegisterForm = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  errors?: TErrorForm;
};

type TAppForms = {
  login?: TLoginForm;
  register?: TRegisterForm;
  authenticationMode: TAuthenticationMode;
};

export type TAppActions = TAppFormsActions | TUserActions;

export type TAppState = {
  appForms: TAppForms;
  user?: TUser;
};

export type TAppContext = {
  appState: TAppState;
  dispatch: Dispatch<TAppActions>;
};

import {Dispatch} from 'react';
import {TLoginActions} from './appForms/login/types';
import {TUserActions} from './user/types';

export type TUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthDate: string;
  creationDate: string;
};

export type TErrorForm = {
  message: string;
};

type TLoginForm = {
  email?: string;
  password?: string;
  errors?: TErrorForm;
};

type TAppForms = {
  login?: TLoginForm;
};

export type TAppActions = TLoginActions | TUserActions;

export type TAppState = {
  appForms: TAppForms;
  user?: TUser;
};

export type TAppContext = {
  appState: TAppState;
  dispatch: Dispatch<TAppActions>;
};

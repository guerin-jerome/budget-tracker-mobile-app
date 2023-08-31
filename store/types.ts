import {Dispatch} from 'react';
import {TLoginActions} from './appForms/login/types';

export type TUser = {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  birthDate: string;
  creationDate: string;
};

type TLoginForm = {
  email?: string;
  password?: string;
};

type TAppForms = {
  login?: TLoginForm;
};

export type TAppActions = TLoginActions;

export type TAppState = {
  appForms: TAppForms;
};

export type TAppContext = {
  appState: TAppState;
  dispatch: Dispatch<TAppActions>;
};

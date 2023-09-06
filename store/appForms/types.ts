import {TAuthenticationMode} from '../types';
import {TLoginActions} from './login/types';
import {TRegisterActions} from './register/types';

export type TAppFormsSetAuthenticationModeAction = {
  type: 'appForms.type.set_authentication_mode';
  payload: TAuthenticationMode;
};

export type TAppFormsActions =
  | TAppFormsSetAuthenticationModeAction
  | TLoginActions
  | TRegisterActions;

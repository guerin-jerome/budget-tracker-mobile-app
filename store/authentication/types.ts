import {TAuthenticationMode, TErrorForm, TUser} from '../types';

export type TAuthenticationSucceedPayload = {
  withUser: TUser;
};

export type TAuthenticationFillsOutLoginEmailAction = {
  type: 'authentication.login.fills_out_form.type';
  payload: {
    key: 'email';
    value: string;
  };
};

export type TAuthenticationFillsOutLoginPasswordAction = {
  type: 'authentication.login.fills_out_form.type';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TAuthenticationLoginOnErrorAction = {
  type: 'authentication.login.on_error.type';
  payload: TErrorForm;
};

export type TAuthenticationLoginOnSuccessAction = {
  type: 'authentication.login.on_success.type';
  payload: TUser;
};

export type TAuthenticationFillsOutRegisterNameAction = {
  type: 'authentication.register.fills_out_form.type';
  payload: {
    key: 'name';
    value: string;
  };
};

export type TAuthenticationFillsOutRegisterEmailAction = {
  type: 'authentication.register.fills_out_form.type';
  payload: {
    key: 'email';
    value: string;
  };
};

export type TAuthenticationFillsOutRegisterPasswordAction = {
  type: 'authentication.register.fills_out_form.type';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TAuthenticationFillsOutRegisterConfirmPasswordAction = {
  type: 'authentication.register.fills_out_form.type';
  payload: {
    key: 'confirmPassword';
    value: string;
  };
};

export type TAuthenticationRegisterOnErrorAction = {
  type: 'authentication.register.on_error.type';
  payload: TErrorForm;
};

export type TAuthenticationRegisterOnSuccessAction = {
  type: 'authentication.register.on_success.type';
  payload: TUser;
};

export type TAuthenticationChangeMode = {
  type: 'authentication.change_mode.type';
  payload: TAuthenticationMode;
};

export type TAuthenticationActions =
  | TAuthenticationFillsOutLoginEmailAction
  | TAuthenticationFillsOutLoginPasswordAction
  | TAuthenticationLoginOnErrorAction
  | TAuthenticationLoginOnSuccessAction
  | TAuthenticationFillsOutRegisterNameAction
  | TAuthenticationFillsOutRegisterEmailAction
  | TAuthenticationFillsOutRegisterPasswordAction
  | TAuthenticationFillsOutRegisterConfirmPasswordAction
  | TAuthenticationRegisterOnErrorAction
  | TAuthenticationRegisterOnSuccessAction
  | TAuthenticationChangeMode;

import {TErrorForm} from '../../types';

export type TLoginSetEmailAction = {
  type: 'appForms.login.type.set_email';
  payload: {
    key: 'email';
    value: string;
  };
};

export type TLoginSetPasswordAction = {
  type: 'appForms.login.type.set_password';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TLoginSetErrorsAction = {
  type: 'appForms.login.type.set_errors';
  payload: TErrorForm;
};

export type TLoginResetForm = {
  type: 'appForms.login.type.reset_form';
};

export type TLoginActions =
  | TLoginSetEmailAction
  | TLoginSetPasswordAction
  | TLoginSetErrorsAction
  | TLoginResetForm;

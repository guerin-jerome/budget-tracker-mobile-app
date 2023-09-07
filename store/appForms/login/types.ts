import {TErrorForm} from '../../types';

export type TLoginFillsOutEmailAction = {
  type: 'appForms.login.fills_out_form.type';
  payload: {
    key: 'email';
    value: string;
  };
};

export type TLoginFillsOutPasswordAction = {
  type: 'appForms.login.fills_out_form.type';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TLoginOnErrorAction = {
  type: 'appForms.login.on_error.type';
  payload: TErrorForm;
};

export type TLoginOnSuccessAction = {
  type: 'appForms.login.on_success.type';
};

export type TLoginActions =
  | TLoginFillsOutEmailAction
  | TLoginFillsOutPasswordAction
  | TLoginOnErrorAction
  | TLoginOnSuccessAction;

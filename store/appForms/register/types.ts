import {TErrorForm} from '../../types';

export type TRegisterFillsOutEmailAction = {
  type: 'appForms.register.fills_out_form.type';
  payload: {
    key: 'email';
    value: string;
  };
};

export type TRegisterFillsOutNameAction = {
  type: 'appForms.register.fills_out_form.type';
  payload: {
    key: 'name';
    value: string;
  };
};

export type TRegisterFillsOutPasswordAction = {
  type: 'appForms.register.fills_out_form.type';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TRegisterFillsOutConfirmPasswordAction = {
  type: 'appForms.register.fills_out_form.type';
  payload: {
    key: 'confirmPassword';
    value: string;
  };
};

export type TRegisterOnErrorAction = {
  type: 'appForms.register.on_error.type';
  payload: TErrorForm;
};

export type TRegisterOnSuccessAction = {
  type: 'appForms.register.on_success.type';
};

export type TRegisterActions =
  | TRegisterFillsOutNameAction
  | TRegisterFillsOutEmailAction
  | TRegisterFillsOutPasswordAction
  | TRegisterFillsOutConfirmPasswordAction
  | TRegisterOnErrorAction
  | TRegisterOnSuccessAction;

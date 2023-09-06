import {TErrorForm} from '../../types';

export type TRegisterSetEmailAction = {
  type: 'appForms.register.type.set_email';
  payload: {
    key: 'email';
    value: string;
  };
};

export type TRegisterSetNameAction = {
  type: 'appForms.register.type.set_name';
  payload: {
    key: 'name';
    value: string;
  };
};

export type TRegisterSetPasswordAction = {
  type: 'appForms.register.type.set_password';
  payload: {
    key: 'password';
    value: string;
  };
};

export type TRegisterSetConfirmPasswordAction = {
  type: 'appForms.register.type.set_confirm_password';
  payload: {
    key: 'confirmPassword';
    value: string;
  };
};

export type TRegisterSetErrorsAction = {
  type: 'appForms.register.type.set_errors';
  payload: TErrorForm;
};

export type TRegisterResetForm = {
  type: 'appForms.register.type.reset_form';
};

export type TRegisterActions =
  | TRegisterSetEmailAction
  | TRegisterSetNameAction
  | TRegisterSetPasswordAction
  | TRegisterSetConfirmPasswordAction
  | TRegisterSetErrorsAction
  | TRegisterResetForm;

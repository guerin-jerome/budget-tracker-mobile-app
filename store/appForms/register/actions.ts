import {TErrorForm} from '../../types';
import {
  ACTION_REGISTER_RESET_FORM,
  ACTION_REGISTER_SET_CONFIRM_PASSWORD_KEY,
  ACTION_REGISTER_SET_CONFIRM_PASSWORD_TYPE,
  ACTION_REGISTER_SET_EMAIL_KEY,
  ACTION_REGISTER_SET_EMAIL_TYPE,
  ACTION_REGISTER_SET_ERRORS_TYPE,
  ACTION_REGISTER_SET_NAME_KEY,
  ACTION_REGISTER_SET_NAME_TYPE,
  ACTION_REGISTER_SET_PASSWORD_KEY,
  ACTION_REGISTER_SET_PASSWORD_TYPE,
} from './constants';
import {
  TRegisterResetForm,
  TRegisterSetConfirmPasswordAction,
  TRegisterSetEmailAction,
  TRegisterSetErrorsAction,
  TRegisterSetNameAction,
  TRegisterSetPasswordAction,
} from './types';

export const setRegisterEmail = (value: string): TRegisterSetEmailAction => ({
  type: ACTION_REGISTER_SET_EMAIL_TYPE,
  payload: {key: ACTION_REGISTER_SET_EMAIL_KEY, value},
});

export const setRegisterName = (value: string): TRegisterSetNameAction => ({
  type: ACTION_REGISTER_SET_NAME_TYPE,
  payload: {key: ACTION_REGISTER_SET_NAME_KEY, value},
});

export const setRegisterPassword = (
  value: string,
): TRegisterSetPasswordAction => ({
  type: ACTION_REGISTER_SET_PASSWORD_TYPE,
  payload: {key: ACTION_REGISTER_SET_PASSWORD_KEY, value},
});

export const setRegisterConfirmPassword = (
  value: string,
): TRegisterSetConfirmPasswordAction => ({
  type: ACTION_REGISTER_SET_CONFIRM_PASSWORD_TYPE,
  payload: {key: ACTION_REGISTER_SET_CONFIRM_PASSWORD_KEY, value},
});

export const setRegisterErrors = (
  value: TErrorForm,
): TRegisterSetErrorsAction => ({
  type: ACTION_REGISTER_SET_ERRORS_TYPE,
  payload: value,
});

export const resetRegisterForm = (): TRegisterResetForm => ({
  type: ACTION_REGISTER_RESET_FORM,
});

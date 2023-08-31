import {TErrorForm} from '../../types';
import {
  ACTION_LOGIN_RESET_FORM,
  ACTION_LOGIN_SET_EMAIL_KEY,
  ACTION_LOGIN_SET_EMAIL_TYPE,
  ACTION_LOGIN_SET_ERRORS_TYPE,
  ACTION_LOGIN_SET_PASSWORD_KEY,
  ACTION_LOGIN_SET_PASSWORD_TYPE,
} from './constants';
import {
  TLoginResetForm,
  TLoginSetEmailAction,
  TLoginSetErrorsAction,
  TLoginSetPasswordAction,
} from './types';

export const setLoginEmail = (value: string): TLoginSetEmailAction => ({
  type: ACTION_LOGIN_SET_EMAIL_TYPE,
  payload: {key: ACTION_LOGIN_SET_EMAIL_KEY, value},
});

export const setLoginPassword = (value: string): TLoginSetPasswordAction => ({
  type: ACTION_LOGIN_SET_PASSWORD_TYPE,
  payload: {key: ACTION_LOGIN_SET_PASSWORD_KEY, value},
});

export const setLoginErrors = (value: TErrorForm): TLoginSetErrorsAction => ({
  type: ACTION_LOGIN_SET_ERRORS_TYPE,
  payload: value,
});

export const resetLoginForm = (): TLoginResetForm => ({
  type: ACTION_LOGIN_RESET_FORM,
});

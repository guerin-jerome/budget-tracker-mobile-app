import {TErrorForm} from '../../types';
import {
  LOGIN_FILLS_OUT_EMAIL_KEY,
  LOGIN_FILLS_OUT_FORM_TYPE,
  LOGIN_FILLS_OUT_PASSWORD_KEY,
  LOGIN_ON_ERROR_TYPE,
  LOGIN_ON_SUCCESS_TYPE,
} from './constants';
import {
  TLoginFillsOutEmailAction,
  TLoginFillsOutPasswordAction,
  TLoginOnErrorAction,
  TLoginOnSuccessAction,
} from './types';

export const fillsOutLoginEmail = (
  value: string,
): TLoginFillsOutEmailAction => ({
  type: LOGIN_FILLS_OUT_FORM_TYPE,
  payload: {key: LOGIN_FILLS_OUT_EMAIL_KEY, value},
});

export const fillsOutLoginPassword = (
  value: string,
): TLoginFillsOutPasswordAction => ({
  type: LOGIN_FILLS_OUT_FORM_TYPE,
  payload: {key: LOGIN_FILLS_OUT_PASSWORD_KEY, value},
});

export const onLoginError = (value: TErrorForm): TLoginOnErrorAction => ({
  type: LOGIN_ON_ERROR_TYPE,
  payload: value,
});

export const onLoginSucceed = (): TLoginOnSuccessAction => ({
  type: LOGIN_ON_SUCCESS_TYPE,
});

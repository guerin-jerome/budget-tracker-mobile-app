import {TAuthenticationMode, TErrorForm} from '../types';
import {
  CHANGE_AUTHENTICATION_MODE_TYPE,
  LOGIN_FILLS_OUT_EMAIL_KEY,
  LOGIN_FILLS_OUT_FORM_TYPE,
  LOGIN_FILLS_OUT_PASSWORD_KEY,
  LOGIN_ON_ERROR_TYPE,
  LOGIN_ON_SUCCESS_TYPE,
  LOGOUT_TYPE,
  REGISTER_FILLS_OUT_CONFIRM_PASSWORD_KEY,
  REGISTER_FILLS_OUT_EMAIL_KEY,
  REGISTER_FILLS_OUT_FORM_TYPE,
  REGISTER_FILLS_OUT_NAME_KEY,
  REGISTER_FILLS_OUT_PASSWORD_KEY,
  REGISTER_ON_ERROR_TYPE,
  REGISTER_ON_SUCCESS_TYPE,
} from './constants';
import {
  TAuthenticationChangeMode,
  TAuthenticationFillsOutLoginEmailAction,
  TAuthenticationFillsOutLoginPasswordAction,
  TAuthenticationFillsOutRegisterConfirmPasswordAction,
  TAuthenticationFillsOutRegisterEmailAction,
  TAuthenticationFillsOutRegisterNameAction,
  TAuthenticationFillsOutRegisterPasswordAction,
  TAuthenticationLoginOnErrorAction,
  TAuthenticationLoginOnSuccessAction,
  TAuthenticationLogout,
  TAuthenticationRegisterOnErrorAction,
  TAuthenticationRegisterOnSuccessAction,
  TAuthenticationRegisterSucceedPayload,
  TAuthenticationLoginSucceedPayload,
} from './types';

export const fillsOutLoginEmail = (
  value: string,
): TAuthenticationFillsOutLoginEmailAction => ({
  type: LOGIN_FILLS_OUT_FORM_TYPE,
  payload: {
    key: LOGIN_FILLS_OUT_EMAIL_KEY,
    value,
  },
});

export const fillsOutLoginPassword = (
  value: string,
): TAuthenticationFillsOutLoginPasswordAction => ({
  type: LOGIN_FILLS_OUT_FORM_TYPE,
  payload: {
    key: LOGIN_FILLS_OUT_PASSWORD_KEY,
    value,
  },
});

export const onLoginError = (
  error: TErrorForm,
): TAuthenticationLoginOnErrorAction => ({
  type: LOGIN_ON_ERROR_TYPE,
  payload: error,
});

export const onLoginSuccess = (
  payload: TAuthenticationLoginSucceedPayload,
): TAuthenticationLoginOnSuccessAction => ({
  type: LOGIN_ON_SUCCESS_TYPE,
  payload,
});

export const fillsOutRegisterName = (
  value: string,
): TAuthenticationFillsOutRegisterNameAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {
    key: REGISTER_FILLS_OUT_NAME_KEY,
    value,
  },
});

export const fillsOutRegisterEmail = (
  value: string,
): TAuthenticationFillsOutRegisterEmailAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {
    key: REGISTER_FILLS_OUT_EMAIL_KEY,
    value,
  },
});

export const fillsOutRegisterPassword = (
  value: string,
): TAuthenticationFillsOutRegisterPasswordAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {
    key: REGISTER_FILLS_OUT_PASSWORD_KEY,
    value,
  },
});

export const fillsOutRegisterConfirmPassword = (
  value: string,
): TAuthenticationFillsOutRegisterConfirmPasswordAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {
    key: REGISTER_FILLS_OUT_CONFIRM_PASSWORD_KEY,
    value,
  },
});

export const onRegisterError = (
  error: TErrorForm,
): TAuthenticationRegisterOnErrorAction => ({
  type: REGISTER_ON_ERROR_TYPE,
  payload: error,
});

export const onRegisterSuccess = (
  payload: TAuthenticationRegisterSucceedPayload,
): TAuthenticationRegisterOnSuccessAction => ({
  type: REGISTER_ON_SUCCESS_TYPE,
  payload,
});

export const onChangeAuthenticationMode = (
  mode: TAuthenticationMode,
): TAuthenticationChangeMode => ({
  type: CHANGE_AUTHENTICATION_MODE_TYPE,
  payload: mode,
});

export const onLogout = (): TAuthenticationLogout => ({
  type: LOGOUT_TYPE,
});

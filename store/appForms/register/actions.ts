import {TErrorForm} from '../../types';
import {
  REGISTER_FILLS_OUT_CONFIRM_PASSWORD_KEY,
  REGISTER_FILLS_OUT_EMAIL_KEY,
  REGISTER_FILLS_OUT_FORM_TYPE,
  REGISTER_FILLS_OUT_NAME_KEY,
  REGISTER_FILLS_OUT_PASSWORD_KEY,
  REGISTER_ON_ERROR_TYPE,
  REGISTER_ON_SUCCESS_TYPE,
} from './constants';
import {
  TRegisterFillsOutConfirmPasswordAction,
  TRegisterFillsOutEmailAction,
  TRegisterFillsOutNameAction,
  TRegisterFillsOutPasswordAction,
  TRegisterOnErrorAction,
  TRegisterOnSuccessAction,
} from './types';

export const fillsOutRegisterEmail = (
  value: string,
): TRegisterFillsOutEmailAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {key: REGISTER_FILLS_OUT_EMAIL_KEY, value},
});

export const fillsOutRegisterName = (
  value: string,
): TRegisterFillsOutNameAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {key: REGISTER_FILLS_OUT_NAME_KEY, value},
});

export const fillsOutRegisterPassword = (
  value: string,
): TRegisterFillsOutPasswordAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {key: REGISTER_FILLS_OUT_PASSWORD_KEY, value},
});

export const fillsOutRegisterConfirmPassword = (
  value: string,
): TRegisterFillsOutConfirmPasswordAction => ({
  type: REGISTER_FILLS_OUT_FORM_TYPE,
  payload: {key: REGISTER_FILLS_OUT_CONFIRM_PASSWORD_KEY, value},
});

export const onRegisterError = (value: TErrorForm): TRegisterOnErrorAction => ({
  type: REGISTER_ON_ERROR_TYPE,
  payload: value,
});

export const onRegisterSuccess = (): TRegisterOnSuccessAction => ({
  type: REGISTER_ON_SUCCESS_TYPE,
});

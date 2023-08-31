import {
  ACTION_LOGIN_SET_EMAIL_KEY,
  ACTION_LOGIN_SET_EMAIL_TYPE,
  ACTION_LOGIN_SET_PASSWORD_KEY,
  ACTION_LOGIN_SET_PASSWORD_TYPE,
} from './constants';
import {TLoginSetEmailAction, TLoginSetPasswordAction} from './types';

export const setLoginEmail = (value: string): TLoginSetEmailAction => ({
  type: ACTION_LOGIN_SET_EMAIL_TYPE,
  payload: {key: ACTION_LOGIN_SET_EMAIL_KEY, value},
});

export const setLoginPassword = (value: string): TLoginSetPasswordAction => ({
  type: ACTION_LOGIN_SET_PASSWORD_TYPE,
  payload: {key: ACTION_LOGIN_SET_PASSWORD_KEY, value},
});

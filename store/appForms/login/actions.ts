import {
  ACTION_LOGIN_SET_EMAIL_OR_USERNAME_KEY,
  ACTION_LOGIN_SET_EMAIL_OR_USERNAME_TYPE,
  ACTION_LOGIN_SET_PASSWORD_KEY,
  ACTION_LOGIN_SET_PASSWORD_TYPE,
} from './constants';
import {TLoginSetEmailOrUsernameAction, TLoginSetPasswordAction} from './types';

export const setLoginEmailOrUsername = (
  value: string,
): TLoginSetEmailOrUsernameAction => ({
  type: ACTION_LOGIN_SET_EMAIL_OR_USERNAME_TYPE,
  payload: {key: ACTION_LOGIN_SET_EMAIL_OR_USERNAME_KEY, value},
});

export const setLoginPassword = (value: string): TLoginSetPasswordAction => ({
  type: ACTION_LOGIN_SET_PASSWORD_TYPE,
  payload: {key: ACTION_LOGIN_SET_PASSWORD_KEY, value},
});

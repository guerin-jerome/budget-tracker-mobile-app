import {TUser} from '../types';
import {ACTION_USER_RESET_TYPE, ACTION_USER_SET_TYPE} from './constants';
import {TUserResetAction, TUserSetAction} from './types';

export const setUser = (value: TUser): TUserSetAction => ({
  type: ACTION_USER_SET_TYPE,
  payload: value,
});

export const resetUser = (): TUserResetAction => ({
  type: ACTION_USER_RESET_TYPE,
});

import {TUser} from '../types';

export type TUserSetAction = {
  type: 'user.type.set_user';
  payload: TUser;
};

export type TUserResetAction = {
  type: 'user.type.reset_user';
};

export type TUserActions = TUserSetAction | TUserResetAction;

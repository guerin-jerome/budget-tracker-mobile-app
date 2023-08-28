import {TUser} from '../../types';

export type TUserAction = TSetUserAction | TResetUserAction;

type TSetUserAction = {
  type: 'user.set';
  payload: TUser;
};

type TResetUserAction = {
  type: 'user.reset';
  payload: null;
};

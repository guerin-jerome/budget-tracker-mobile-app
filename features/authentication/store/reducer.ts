import {TAppState} from '../../types';
import {USER_ACTION_TYPES} from './constants';
import {TUserAction} from './types';

export const userReducer = (state: TAppState, action: TUserAction) => {
  const {type, payload} = action;
  switch (type) {
    case USER_ACTION_TYPES.set:
      return {
        ...state,
        user: payload,
      };
    case USER_ACTION_TYPES.reset:
      return {
        ...state,
        user: null,
      };
    default:
      throw new Error(`Unknown action type: ${type}`);
  }
};

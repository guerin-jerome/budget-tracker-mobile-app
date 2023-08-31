import {TAppState} from '../types';
import {ACTION_USER_RESET_TYPE, ACTION_USER_SET_TYPE} from './constants';
import {TUserActions} from './types';

export const userReducer = (
  state: TAppState,
  action: TUserActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    case ACTION_USER_SET_TYPE:
      return {
        ...state,
        user: action.payload,
      };
    case ACTION_USER_RESET_TYPE:
      return {
        ...state,
        user: undefined,
      };
    default:
      throw new Error(`Unknown action in loginReducer, with type: ${type}`);
  }
};

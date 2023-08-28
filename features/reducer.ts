import {USER_ACTION_TYPE_PREFIX} from './authentication/store/constants';
import {userReducer} from './authentication/store/reducer';
import {TAction, TAppState} from './types';

export const reducer = (state: TAppState, action: TAction) => {
  const {type} = action;

  if (type.includes(USER_ACTION_TYPE_PREFIX)) {
    return userReducer(state, action);
  }

  throw new Error('Unknown reducer');
};

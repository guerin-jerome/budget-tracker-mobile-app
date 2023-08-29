import {TAppState} from '../types';
import {ACTION_LOGIN_PREFIX} from './login/constants';
import {loginReducer} from './login/reducer';
import {TAppFormsActions} from './types';

export const appFormsReducer = (
  state: TAppState,
  action: TAppFormsActions,
): TAppState => {
  const {type} = action;

  if (type.includes(ACTION_LOGIN_PREFIX)) {
    return loginReducer(state, action);
  }

  throw new Error(`Unknown action in appFormsReducer, with type: ${type}`);
};

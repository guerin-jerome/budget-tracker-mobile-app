import {ACTION_AUTHENTICATION_PREFIX} from './authentication/constants';
import {authenticationReducer} from './authentication/reducer';
import {TAuthenticationActions} from './authentication/types';
import {TAppActions, TAppState} from './types';

export const appReducer = (
  state: TAppState,
  action: TAppActions,
): TAppState => {
  const {type} = action;

  if (type.includes(ACTION_AUTHENTICATION_PREFIX)) {
    return authenticationReducer(state, action as TAuthenticationActions);
  }

  throw new Error(`Unknown action in appReducer, with type: ${type}`);
};

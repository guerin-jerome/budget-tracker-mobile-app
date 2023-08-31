import {ACTION_APPFORMS_PREFIX} from './appForms/constants';
import {TLoginActions} from './appForms/login/types';
import {appFormsReducer} from './appForms/reducer';
import {TAppActions, TAppState} from './types';
import {ACTION_USER_PREFIX} from './user/constants';
import {userReducer} from './user/reducer';
import {TUserActions} from './user/types';

export const appReducer = (
  state: TAppState,
  action: TAppActions,
): TAppState => {
  const {type} = action;

  if (type.includes(ACTION_APPFORMS_PREFIX)) {
    return appFormsReducer(state, action as TLoginActions);
  }

  if (type.includes(ACTION_USER_PREFIX)) {
    return userReducer(state, action as TUserActions);
  }

  throw new Error(`Unknown action in appReducer, with type: ${type}`);
};

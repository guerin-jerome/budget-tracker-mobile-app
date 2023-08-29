import {ACTION_APPFORMS_PREFIX} from './appForms/constants';
import {appFormsReducer} from './appForms/reducer';
import {TAppActions, TAppState} from './types';

export const appReducer = (
  state: TAppState,
  action: TAppActions,
): TAppState => {
  const {type} = action;

  if (type.includes(ACTION_APPFORMS_PREFIX)) {
    return appFormsReducer(state, action);
  }

  throw new Error(`Unknown action in appReducer, with type: ${type}`);
};

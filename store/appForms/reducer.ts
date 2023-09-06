import {TAppState} from '../types';
import {ACTION_APPFORMS_SET_AUTHENTICATION_MODE_TYPE} from './constants';
import {ACTION_LOGIN_PREFIX} from './login/constants';
import {loginReducer} from './login/reducer';
import {TLoginActions} from './login/types';
import {ACTION_REGISTER_PREFIX} from './register/constants';
import {registerReducer} from './register/reducer';
import {TRegisterActions} from './register/types';
import {TAppFormsActions} from './types';

export const appFormsReducer = (
  state: TAppState,
  action: TAppFormsActions,
): TAppState => {
  const {type} = action;

  if (type.includes(ACTION_LOGIN_PREFIX)) {
    return loginReducer(state, action as TLoginActions);
  }

  if (type.includes(ACTION_REGISTER_PREFIX)) {
    return registerReducer(state, action as TRegisterActions);
  }

  switch (type) {
    case ACTION_APPFORMS_SET_AUTHENTICATION_MODE_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: undefined,
          register: undefined,
          authenticationMode: action.payload,
        },
      };
    default:
      throw new Error(`Unknown action in appFormsReducer, with type: ${type}`);
  }
};

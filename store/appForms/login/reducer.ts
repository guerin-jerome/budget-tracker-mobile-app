import {TAppState} from '../../types';
import {
  ACTION_LOGIN_RESET_FORM,
  ACTION_LOGIN_SET_EMAIL_TYPE,
  ACTION_LOGIN_SET_ERRORS_TYPE,
  ACTION_LOGIN_SET_PASSWORD_TYPE,
} from './constants';
import {TLoginActions} from './types';

export const loginReducer = (
  state: TAppState,
  action: TLoginActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    case ACTION_LOGIN_SET_PASSWORD_TYPE:
    case ACTION_LOGIN_SET_EMAIL_TYPE:
      // eslint-disable-next-line no-case-declarations
      const {key, value} = action.payload;
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {
            ...state?.appForms?.login,
            errors: undefined,
            [key]: value,
          },
        },
      };
    case ACTION_LOGIN_SET_ERRORS_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {
            ...state?.appForms?.login,
            errors: action.payload,
          },
        },
      };
    case ACTION_LOGIN_RESET_FORM:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: undefined,
        },
      };
    default:
      throw new Error(`Unknown action in loginReducer, with type: ${type}`);
  }
};

import {TAppState} from '../../types';
import {
  ACTION_LOGIN_SET_EMAIL_OR_USERNAME_TYPE,
  ACTION_LOGIN_SET_PASSWORD_TYPE,
} from './constants';
import {TLoginActions} from './types';

export const loginReducer = (
  state: TAppState,
  action: TLoginActions,
): TAppState => {
  const {type, payload} = action;
  const {key, value} = payload;

  switch (type) {
    case ACTION_LOGIN_SET_PASSWORD_TYPE:
    case ACTION_LOGIN_SET_EMAIL_OR_USERNAME_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {
            ...state?.appForms?.login,
            [key]: value,
          },
        },
      };
    default:
      throw new Error(`Unknown action in appFormsReducer, with type: ${type}`);
  }
};

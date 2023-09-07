import {TAppState} from '../../types';
import {
  LOGIN_FILLS_OUT_FORM_TYPE,
  LOGIN_ON_ERROR_TYPE,
  LOGIN_ON_SUCCESS_TYPE,
} from './constants';
import {TLoginActions} from './types';

export const loginReducer = (
  state: TAppState,
  action: TLoginActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    case LOGIN_FILLS_OUT_FORM_TYPE:
      // eslint-disable-next-line no-case-declarations
      const {key, value} = action.payload;
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {
            ...state?.appForms?.login,
            error: undefined,
            [key]: value,
          },
        },
      };
    case LOGIN_ON_ERROR_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {
            ...state?.appForms?.login,
            error: action.payload,
          },
        },
      };
    case LOGIN_ON_SUCCESS_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {isSucceed: true},
        },
      };
    default:
      throw new Error(`Unknown action in loginReducer, with type: ${type}`);
  }
};

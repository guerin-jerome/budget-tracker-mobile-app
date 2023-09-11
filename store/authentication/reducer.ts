import {TAppState} from '../types';
import {
  CHANGE_AUTHENTICATION_MODE_TYPE,
  LOGIN_FILLS_OUT_FORM_TYPE,
  LOGIN_ON_ERROR_TYPE,
  LOGIN_ON_SUCCESS_TYPE,
  REGISTER_FILLS_OUT_FORM_TYPE,
  REGISTER_ON_ERROR_TYPE,
  REGISTER_ON_SUCCESS_TYPE,
} from './constants';
import {TAuthenticationActions} from './types';

export const authenticationReducer = (
  state: TAppState,
  action: TAuthenticationActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    /**
     * Login part
     */
    case LOGIN_FILLS_OUT_FORM_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          login: {
            ...state?.appForms?.login,
            error: undefined,
            [action.payload.key]: action.payload.value,
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
        user: action.payload,
        appForms: {
          ...state?.appForms,
          login: {isSucceed: true},
        },
      };
    /**
     * Register part
     */
    case REGISTER_FILLS_OUT_FORM_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          register: {
            ...state?.appForms?.register,
            error: undefined,
            [action.payload.key]: action.payload.value,
          },
        },
      };
    case REGISTER_ON_ERROR_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          register: {
            ...state?.appForms?.register,
            error: action.payload,
          },
        },
      };
    case REGISTER_ON_SUCCESS_TYPE:
      return {
        ...state,
        user: action.payload,
        appForms: {
          ...state?.appForms,
          register: {isSucceed: true},
        },
      };

    /**
     * Others
     */
    case CHANGE_AUTHENTICATION_MODE_TYPE:
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
      throw new Error(
        `Unknown action in authenticationReducer, with type: ${type}`,
      );
  }
};

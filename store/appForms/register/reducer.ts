import {TAppState} from '../../types';
import {
  ACTION_REGISTER_RESET_FORM,
  ACTION_REGISTER_SET_CONFIRM_PASSWORD_TYPE,
  ACTION_REGISTER_SET_EMAIL_TYPE,
  ACTION_REGISTER_SET_ERRORS_TYPE,
  ACTION_REGISTER_SET_NAME_TYPE,
  ACTION_REGISTER_SET_PASSWORD_TYPE,
} from './constants';
import {TRegisterActions} from './types';

export const registerReducer = (
  state: TAppState,
  action: TRegisterActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    case ACTION_REGISTER_SET_NAME_TYPE:
    case ACTION_REGISTER_SET_EMAIL_TYPE:
    case ACTION_REGISTER_SET_PASSWORD_TYPE:
    case ACTION_REGISTER_SET_CONFIRM_PASSWORD_TYPE:
      // eslint-disable-next-line no-case-declarations
      const {key, value} = action.payload;
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          register: {
            ...state?.appForms?.register,
            errors: undefined,
            [key]: value,
          },
        },
      };
    case ACTION_REGISTER_SET_ERRORS_TYPE:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          register: {
            ...state?.appForms?.register,
            errors: action.payload,
          },
        },
      };
    case ACTION_REGISTER_RESET_FORM:
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          register: undefined,
        },
      };
    default:
      throw new Error(`Unknown action in registerReducer, with type: ${type}`);
  }
};

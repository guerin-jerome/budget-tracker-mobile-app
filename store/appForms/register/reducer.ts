import {TAppState} from '../../types';
import {
  REGISTER_FILLS_OUT_FORM_TYPE,
  REGISTER_ON_ERROR_TYPE,
  REGISTER_ON_SUCCESS_TYPE,
} from './constants';
import {TRegisterActions} from './types';

export const registerReducer = (
  state: TAppState,
  action: TRegisterActions,
): TAppState => {
  const {type} = action;

  switch (type) {
    case REGISTER_FILLS_OUT_FORM_TYPE:
      // eslint-disable-next-line no-case-declarations
      const {key, value} = action.payload;
      return {
        ...state,
        appForms: {
          ...state?.appForms,
          register: {
            ...state?.appForms?.register,
            error: undefined,
            [key]: value,
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
        appForms: {
          ...state?.appForms,
          register: {isSucceed: true},
        },
      };
    default:
      throw new Error(`Unknown action in registerReducer, with type: ${type}`);
  }
};

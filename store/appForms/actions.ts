import {TAuthenticationMode} from '../types';
import {ACTION_APPFORMS_SET_AUTHENTICATION_MODE_TYPE} from './constants';
import {TAppFormsSetAuthenticationModeAction} from './types';

export const setAppFormsAuthenticationMode = (
  value: TAuthenticationMode,
): TAppFormsSetAuthenticationModeAction => ({
  type: ACTION_APPFORMS_SET_AUTHENTICATION_MODE_TYPE,
  payload: value,
});

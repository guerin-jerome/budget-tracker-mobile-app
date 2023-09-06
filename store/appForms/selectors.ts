import {TAppState} from '../types';

export const getAppFormsAuthenticationMode = (state: TAppState) =>
  state.appForms.authenticationMode;

import {TAppState} from '../../types';

export const getLoginPassword = (state: TAppState) =>
  state.appForms.login?.password ?? '';
export const getLoginEmail = (state: TAppState) =>
  state.appForms.login?.email ?? '';
export const getLoginErrors = (state: TAppState) =>
  state.appForms.login?.errors;

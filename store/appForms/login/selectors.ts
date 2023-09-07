import {TAppState} from '../../types';

export const getLoginPassword = (state: TAppState) =>
  state.appForms.login?.password ?? '';
export const getLoginEmail = (state: TAppState) =>
  state.appForms.login?.email ?? '';
export const getIsLoginSucceed = (state: TAppState) =>
  state.appForms.login?.isSucceed ?? false;
export const getLoginErrors = (state: TAppState) => state.appForms.login?.error;

import {TAppState} from '../../types';

export const getLoginPassword = (state: TAppState) =>
  state.appForms.login?.password;
export const getLoginEmailOrUsername = (state: TAppState) =>
  state.appForms.login?.emailOrUsername;

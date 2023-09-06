import {TAppState} from '../../types';

export const getRegisterName = (state: TAppState) =>
  state.appForms.register?.name ?? '';
export const getRegisterEmail = (state: TAppState) =>
  state.appForms.register?.email ?? '';
export const getRegisterPassword = (state: TAppState) =>
  state.appForms.register?.password ?? '';
export const getRegisterConfirmPassword = (state: TAppState) =>
  state.appForms.register?.confirmPassword ?? '';
export const getRegisterErrors = (state: TAppState) =>
  state.appForms.register?.errors;

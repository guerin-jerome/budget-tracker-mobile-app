import {TAppState} from './types';

export const getUser = (appState: TAppState) => appState.user ?? {};
export const getAccounts = (appState: TAppState) => appState.accounts ?? [];
export const getBudgets = (appState: TAppState) => appState.budgets ?? [];
export const getExpenses = (appState: TAppState) => appState.expenses ?? [];

export const getAuthenticationMode = (appState: TAppState) =>
  appState.appForms.authenticationMode;

/** Login */
export const getLoginEmail = (appState: TAppState) =>
  appState.appForms.login?.email ?? '';
export const getLoginPassword = (appState: TAppState) =>
  appState.appForms.login?.password ?? '';
export const getLoginError = (appState: TAppState) =>
  appState.appForms.login?.error;
export const getIsLoginSucceed = (appState: TAppState) =>
  appState.appForms.login?.isSucceed ?? false;

/** Register */
export const getRegisterName = (appState: TAppState) =>
  appState.appForms.register?.name ?? '';
export const getRegisterEmail = (appState: TAppState) =>
  appState.appForms.register?.email ?? '';
export const getRegisterPassword = (appState: TAppState) =>
  appState.appForms.register?.password ?? '';
export const getRegisterConfirmPassword = (appState: TAppState) =>
  appState.appForms.register?.confirmPassword ?? '';
export const getRegisterError = (appState: TAppState) =>
  appState.appForms.register?.error;
export const getIsRegisterSucceed = (appState: TAppState) =>
  appState.appForms.register?.isSucceed ?? false;

/** User */
export const getUserName = (appState: TAppState) =>
  getUser(appState)?.name ?? '';

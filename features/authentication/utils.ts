import {
  getLoginEmail,
  getLoginPassword,
} from '../../store/appForms/login/selectors';
import {
  getRegisterConfirmPassword,
  getRegisterEmail,
  getRegisterName,
  getRegisterPassword,
} from '../../store/appForms/register/selectors';
import {TAppState} from '../../store/types';

export const hasLoginFieldsFilled = (appState: TAppState) =>
  getLoginEmail(appState).trim() !== '' &&
  getLoginPassword(appState).trim() !== '';

export const hasRegisterFieldsFilled = (appState: TAppState) =>
  getRegisterName(appState).trim() !== '' &&
  getRegisterEmail(appState).trim() !== '' &&
  getRegisterPassword(appState).trim() !== '' &&
  getRegisterConfirmPassword(appState).trim() !== '';

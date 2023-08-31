import {
  getLoginEmail,
  getLoginPassword,
} from '../../store/appForms/login/selectors';
import {TAppState} from '../../store/types';

export const isLoginFieldsFilled = (appState: TAppState) =>
  getLoginEmail(appState).trim() !== '' &&
  getLoginPassword(appState).trim() !== '';

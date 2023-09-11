import {getLoginEmail, getLoginPassword} from '../../store/selectors';
import {
  getRegisterConfirmPassword,
  getRegisterEmail,
  getRegisterName,
  getRegisterPassword,
} from '../../store/selectors';
import {TAppState} from '../../store/types';

type FormChecking = {
  hasError: boolean;
  errorMessage?: string;
};

const hasLoginFieldsFilled = (appState: TAppState) =>
  getLoginEmail(appState).trim() !== '' &&
  getLoginPassword(appState).trim() !== '';

export const checkLoginFields = (appState: TAppState) => {
  let checking: FormChecking = {
    hasError: false,
  };

  if (!hasLoginFieldsFilled(appState)) {
    checking = {
      hasError: true,
      errorMessage: 'Veuillez remplir tous les champs.',
    };
  }

  return {...checking};
};

const hasRegisterFieldsFilled = (appState: TAppState) =>
  getRegisterName(appState).trim() !== '' &&
  getRegisterEmail(appState).trim() !== '' &&
  getRegisterPassword(appState).trim() !== '' &&
  getRegisterConfirmPassword(appState).trim() !== '';

const hasDifferentPassword = (appState: TAppState) =>
  getRegisterPassword(appState) !== getRegisterConfirmPassword(appState);

const REGEX_VALID_EMAIL =
  // eslint-disable-next-line no-empty-character-class
  /([-!#-'*+/-9=?A-Z^-~]+(\.[-!#-'*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@([0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)*|\[((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|IPv6:((((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){6}|::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){5}|[0-9A-Fa-f]{0,4}::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){4}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):)?(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){3}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,2}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){2}|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,3}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,4}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,5}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3})|(((0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}):){0,6}(0|[1-9A-Fa-f][0-9A-Fa-f]{0,3}))?::)|(?!IPv6:)[0-9A-Za-z-]*[0-9A-Za-z]:[!-Z^-~]+)])/;

const hasIncorrectEmail = (appState: TAppState) =>
  !REGEX_VALID_EMAIL.test(getRegisterEmail(appState));

export const checkRegisterFields = (appState: TAppState) => {
  const checking: FormChecking = {
    hasError: false,
  };

  if (!hasRegisterFieldsFilled(appState)) {
    return {
      hasError: true,
      errorMessage: 'Veuillez remplir tous les champs.',
    };
  }

  if (hasDifferentPassword(appState)) {
    return {
      hasError: true,
      errorMessage: 'Les mots de passe ne correspondent pas.',
    };
  }

  if (hasIncorrectEmail(appState)) {
    return {
      hasError: true,
      errorMessage: "L'email n'est pas valide.",
    };
  }

  return {...checking};
};

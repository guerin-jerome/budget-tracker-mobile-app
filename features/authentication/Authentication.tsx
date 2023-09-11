import React, {useContext, useMemo} from 'react';
import {Pressable, Text, View, Image} from 'react-native';
import {
  authenticationContainerStyles,
  authenticationElementStyles,
} from './styles';
import {logoSource} from '../../constants';
import {Login} from './login/Login';
import {AppContext} from '../../store/store';
import {authenticationService} from '../../services/authentication';
import {checkLoginFields, checkRegisterFields} from './utils';
import {Register} from './register/Register';
import {
  onChangeAuthenticationMode,
  onLoginError,
  onLoginSuccess,
  onRegisterError,
  onRegisterSuccess,
} from '../../store/authentication/actions';
import {
  getAuthenticationMode,
  getLoginEmail,
  getLoginPassword,
  getRegisterEmail,
  getRegisterName,
  getRegisterPassword,
} from '../../store/selectors';

const {container, header, body, footer} = authenticationContainerStyles;
const {
  logo,
  title,
  firstButton,
  firstButtonText,
  secondElement,
  secondElementText,
  secondElementLink,
} = authenticationElementStyles;

export const Authentication = () => {
  const {appState, dispatch} = useContext(AppContext);
  const authenticationMode = getAuthenticationMode(appState);

  const isLoginMode = useMemo(
    () => authenticationMode === 'login',
    [authenticationMode],
  );

  const onClickChangeAuthenticationMode = () => {
    const newMode = isLoginMode ? 'register' : 'login';
    dispatch(onChangeAuthenticationMode(newMode));
  };

  const onSubmitForm = () => {
    switch (authenticationMode) {
      case 'login':
        login();
        break;
      case 'register':
        register();
        break;
    }
  };

  const register = () => {
    const {hasError, errorMessage} = checkRegisterFields(appState);
    if (!hasError) {
      const name = getRegisterName(appState);
      const email = getRegisterEmail(appState);
      const password = getRegisterPassword(appState);
      authenticationService
        .register({name, email, password})
        .then(data => dispatch(onRegisterSuccess({withUser: data})))
        .catch(({status}) => {
          switch (status) {
            case 400:
              dispatch(
                onRegisterError({
                  message: 'Vos identifiants existent déjà, veuillez vérifier.',
                }),
              );
              break;
            case 500:
            default:
              dispatch(
                onRegisterError({
                  message: 'Une erreur est survenue, veuillez réessayer.',
                }),
              );
              break;
          }
        });
    } else {
      dispatch(onRegisterError({message: errorMessage ?? ''}));
    }
  };

  const login = () => {
    const {hasError, errorMessage} = checkLoginFields(appState);
    if (!hasError) {
      const email = getLoginEmail(appState);
      const password = getLoginPassword(appState);
      authenticationService
        .login({email, password})
        .then(data => dispatch(onLoginSuccess({withUser: data})))
        .catch(({status}) => {
          switch (status) {
            case 400:
              dispatch(
                onLoginError({
                  message:
                    'Vos identifiants sont incorrects, veuillez vérifier.',
                }),
              );
              break;
            case 500:
            default:
              dispatch(
                onLoginError({
                  message: 'Une erreur est survenue, veuillez réessayer.',
                }),
              );
              break;
          }
        });
    } else {
      dispatch(onLoginError({message: errorMessage ?? ''}));
    }
  };

  return (
    <View style={container}>
      <View style={header}>
        <Image style={logo} source={logoSource} />
        <Text style={title}>Bienvenu(e) dans Bugdet Tracker !</Text>
      </View>
      <View style={body}>{isLoginMode ? <Login /> : <Register />}</View>
      <View style={footer}>
        <Pressable onPress={onSubmitForm} style={firstButton}>
          <Text style={firstButtonText}>
            {isLoginMode ? 'Connexion' : 'Inscription'}
          </Text>
        </Pressable>
        <View style={secondElement}>
          <Text style={secondElementText}>Ou&nbsp;</Text>
          <Pressable onPress={onClickChangeAuthenticationMode}>
            <Text style={secondElementLink}>
              {isLoginMode ? "s'inscrire" : 'se connecter'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

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
import {setUser} from '../../store/user/actions';
import {hasLoginFieldsFilled, hasRegisterFieldsFilled} from './utils';
import {
  getLoginEmail,
  getLoginPassword,
} from '../../store/appForms/login/selectors';
import {setAppFormsAuthenticationMode} from '../../store/appForms/actions';
import {Register} from './register/Register';
import {
  getRegisterEmail,
  getRegisterName,
  getRegisterPassword,
} from '../../store/appForms/register/selectors';
import {onLoginError, onLoginSucceed} from '../../store/appForms/login/actions';
import {
  onRegisterError,
  onRegisterSuccess,
} from '../../store/appForms/register/actions';

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
  const {authenticationMode} = appState.appForms;

  const isLoginMode = useMemo(
    () => authenticationMode === 'login',
    [authenticationMode],
  );

  const onClickChangeAuthenticationMode = () => {
    const newMode = isLoginMode ? 'register' : 'login';
    dispatch(setAppFormsAuthenticationMode(newMode));
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
    if (
      hasRegisterFieldsFilled(
        appState,
      ) /** TODO: rajouter les vérifications pour éviter trop d'appels au back */
    ) {
      const name = getRegisterName(appState);
      const email = getRegisterEmail(appState);
      const password = getRegisterPassword(appState);
      authenticationService
        .register({name, email, password})
        .then(data => {
          dispatch(setUser(data));
          dispatch(onRegisterSuccess());
        })
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
      dispatch(
        onRegisterError({
          message: 'Veuillez remplir tous les champs.',
        }),
      );
    }
  };

  const login = () => {
    if (
      hasLoginFieldsFilled(
        appState,
      ) /** TODO: rajouter les vérifications pour éviter trop d'appels au back */
    ) {
      const email = getLoginEmail(appState);
      const password = getLoginPassword(appState);
      authenticationService
        .login({email, password})
        .then(data => {
          dispatch(setUser(data));
          dispatch(onLoginSucceed());
        })
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
      dispatch(
        onLoginError({
          message: 'Veuillez remplir tous les champs.',
        }),
      );
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

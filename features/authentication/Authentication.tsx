import React, {useContext} from 'react';
import {TAuthenticationProps} from './types';
import {Pressable, Text, View, Image} from 'react-native';
import {
  authenticationContainerStyles,
  authenticationElementStyles,
} from './styles';
import {logoSource} from '../../constants';
import {Login} from './login/Login';
import {AppContext} from '../../store/store';
import {authenticationService} from '../../services/authentication';
import {
  resetLoginForm,
  setLoginErrors,
} from '../../store/appForms/login/actions';
import {setUser} from '../../store/user/actions';
import {isLoginFieldsFilled} from './utils';
import {
  getLoginEmail,
  getLoginPassword,
} from '../../store/appForms/login/selectors';

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

export const Authentication = ({type}: TAuthenticationProps) => {
  const {appState, dispatch} = useContext(AppContext);

  const onSubmitForm = () => {
    switch (type) {
      case 'login':
        login();
        break;
      case 'register':
        break;
    }
  };

  const login = () => {
    if (isLoginFieldsFilled(appState)) {
      const email = getLoginEmail(appState);
      const password = getLoginPassword(appState);
      authenticationService
        .login({email, password})
        .then(data => {
          dispatch(setUser(data));
          dispatch(resetLoginForm());
        })
        .catch(error => {
          switch (error.status) {
            case 400:
              dispatch(
                setLoginErrors({
                  message:
                    'Vos identifiants sont incorrects, veuillez vérifier.',
                }),
              );
              break;
            case 500:
            default:
              dispatch(
                setLoginErrors({
                  message: 'Une erreur est survenue, veuillez réessayer.',
                }),
              );
              break;
          }
        });
    } else {
      dispatch(
        setLoginErrors({
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
      <View style={body}>{type === 'login' ? <Login /> : <></>}</View>
      <View style={footer}>
        <Pressable onPress={onSubmitForm} style={firstButton}>
          <Text style={firstButtonText}>
            {type === 'login' ? 'Connexion' : 'Inscription'}
          </Text>
        </Pressable>
        <View style={secondElement}>
          <Text style={secondElementText}>Ou&nbsp;</Text>
          <Pressable onPress={() => null}>
            <Text style={secondElementLink}>
              {type === 'login' ? "s'inscrire" : 'se connecter'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

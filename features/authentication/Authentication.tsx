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
  const {appState} = useContext(AppContext);
  const {email, password} = appState.appForms.login || {};

  const onSubmitForm = () => {
    const body = {
      email: email!,
      password: password!,
    };
    authenticationService
      .login(body)
      .then(data => console.debug('DEBUG data : ', data))
      .catch(error => console.debug('DEBUG error : ', error.status));
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

import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {loginElementStyles} from './styles';
import {AppContext} from '../../../store/store';
import {
  setLoginEmail,
  setLoginPassword,
} from '../../../store/appForms/login/actions';

const {label, input} = loginElementStyles;

export const Login = () => {
  const {appState, dispatch} = useContext(AppContext);
  const {email, password} = appState.appForms.login || {};

  return (
    <>
      <View>
        <Text style={label}>Email</Text>
        <TextInput
          style={input}
          value={email}
          onChangeText={text => dispatch(setLoginEmail(text))}
        />
      </View>
      <View>
        <Text style={label}>Mot de passe</Text>
        <TextInput
          style={input}
          autoComplete="current-password"
          textContentType="password"
          secureTextEntry
          value={password}
          onChangeText={text => dispatch(setLoginPassword(text))}
        />
      </View>
    </>
  );
};

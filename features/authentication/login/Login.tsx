import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppContext} from '../../../store/store';
import {authenticationElementStyles} from '../styles';
import {
  fillsOutLoginEmail,
  fillsOutLoginPassword,
} from '../../../store/authentication/actions';
import {
  getLoginEmail,
  getLoginError,
  getLoginPassword,
} from '../../../store/selectors';

const {label, input, errorText} = authenticationElementStyles;

export const Login = () => {
  const {appState, dispatch} = useContext(AppContext);

  const formError = getLoginError(appState);

  return (
    <>
      <View>
        <Text style={label}>Email</Text>
        <TextInput
          style={input}
          value={getLoginEmail(appState)}
          onChangeText={text => dispatch(fillsOutLoginEmail(text))}
        />
      </View>
      <View>
        <Text style={label}>Mot de passe</Text>
        <TextInput
          style={input}
          autoComplete="current-password"
          textContentType="password"
          secureTextEntry
          value={getLoginPassword(appState)}
          onChangeText={text => dispatch(fillsOutLoginPassword(text))}
        />
      </View>
      {formError?.message && <Text style={errorText}>{formError.message}</Text>}
    </>
  );
};

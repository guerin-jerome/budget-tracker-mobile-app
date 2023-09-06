import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppContext} from '../../../store/store';
import {
  setLoginEmail,
  setLoginPassword,
} from '../../../store/appForms/login/actions';
import {
  getLoginEmail,
  getLoginErrors,
  getLoginPassword,
} from '../../../store/appForms/login/selectors';
import {authenticationElementStyles} from '../styles';

const {label, input, errorText} = authenticationElementStyles;

export const Login = () => {
  const {appState, dispatch} = useContext(AppContext);

  const formError = getLoginErrors(appState);

  return (
    <>
      <View>
        <Text style={label}>Email</Text>
        <TextInput
          style={input}
          value={getLoginEmail(appState)}
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
          value={getLoginPassword(appState)}
          onChangeText={text => dispatch(setLoginPassword(text))}
        />
      </View>
      {formError?.message && <Text style={errorText}>{formError.message}</Text>}
    </>
  );
};

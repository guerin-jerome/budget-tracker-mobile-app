import React, {useContext} from 'react';
import {Text, TextInput, View} from 'react-native';
import {AppContext} from '../../../store/store';
import {
  getRegisterConfirmPassword,
  getRegisterEmail,
  getRegisterErrors,
  getRegisterName,
  getRegisterPassword,
} from '../../../store/appForms/register/selectors';
import {
  setRegisterConfirmPassword,
  setRegisterEmail,
  setRegisterName,
  setRegisterPassword,
} from '../../../store/appForms/register/actions';
import {authenticationElementStyles} from '../styles';

const {label, input, errorText} = authenticationElementStyles;

export const Register = () => {
  const {appState, dispatch} = useContext(AppContext);

  const formError = getRegisterErrors(appState);

  return (
    <>
      <View>
        <Text style={label}>Name</Text>
        <TextInput
          style={input}
          value={getRegisterName(appState)}
          onChangeText={text => dispatch(setRegisterName(text))}
        />
      </View>
      <View>
        <Text style={label}>Email</Text>
        <TextInput
          style={input}
          value={getRegisterEmail(appState)}
          onChangeText={text => dispatch(setRegisterEmail(text))}
        />
      </View>
      <View>
        <Text style={label}>Mot de passe</Text>
        <TextInput
          style={input}
          autoComplete="current-password"
          textContentType="password"
          secureTextEntry
          value={getRegisterPassword(appState)}
          onChangeText={text => dispatch(setRegisterPassword(text))}
        />
      </View>
      <View>
        <Text style={label}>Retapez votre mot de passe</Text>
        <TextInput
          style={input}
          autoComplete="current-password"
          textContentType="password"
          secureTextEntry
          value={getRegisterConfirmPassword(appState)}
          onChangeText={text => dispatch(setRegisterConfirmPassword(text))}
        />
      </View>
      {formError?.message && <Text style={errorText}>{formError.message}</Text>}
    </>
  );
};

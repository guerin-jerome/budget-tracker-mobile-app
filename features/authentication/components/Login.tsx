import React from 'react';
import {Text, TextInput, View} from 'react-native';
import {loginElementStyles} from './styles';

const {label, input} = loginElementStyles;

export const Login = () => (
  <>
    <View>
      <Text style={label}>Nom utilisateur / Email</Text>
      <TextInput style={input} />
    </View>
    <View>
      <Text style={label}>Mot de passe</Text>
      <TextInput
        style={input}
        autoComplete="current-password"
        textContentType="password"
        secureTextEntry
      />
    </View>
  </>
);

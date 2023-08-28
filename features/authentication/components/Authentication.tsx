import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import {logoSource} from './constants';
import {
  authenticationContainerStyles,
  authenticationElementStyles,
} from './styles';
import {Login} from './Login';
import {TAuthentication} from './types';
import {Register} from './Register';

// Style
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

export const Authentication = ({
  buttonText,
  linkText,
  type,
}: TAuthentication) => (
  <View style={container}>
    <View style={header}>
      <Image style={logo} source={logoSource} />
      <Text style={title}>Bienvenu(e) dans Bugdet Tracker !</Text>
    </View>
    <View style={body}>{type === 'login' ? <Login /> : <Register />}</View>
    <View style={footer}>
      <Pressable onPress={() => null} style={firstButton}>
        <Text style={firstButtonText}>{buttonText}</Text>
      </Pressable>
      <View style={secondElement}>
        <Text style={secondElementText}>Ou&nbsp;</Text>
        <Pressable onPress={() => null}>
          <Text style={secondElementLink}>{linkText}</Text>
        </Pressable>
      </View>
    </View>
  </View>
);

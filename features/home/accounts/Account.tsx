import React from 'react';
import {Text, View} from 'react-native';
import {accountContainerStyles, accountElementStyles} from './styles';

const {accountContainer, accountHeader} = accountContainerStyles;
const {accountLogo, accountName, accountTotal} = accountElementStyles;

type TAccountProps = {
  key: string;
  name: string;
  total: number;
};

export const Account = ({key, name, total}: TAccountProps) => (
  <View style={accountContainer} key={key}>
    <View style={accountHeader}>
      <View style={accountLogo}></View>
      <Text style={accountName}>{name}</Text>
    </View>
    <Text style={accountTotal}>{total} €</Text>
  </View>
);

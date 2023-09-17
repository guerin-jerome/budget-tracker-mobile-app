import React, {useContext} from 'react';
import {Text, ScrollView} from 'react-native';
import {AppContext} from '../../../store/store';
import {Account} from './Account';
import {accountElementStyles} from './styles';
import {getAccounts} from '../../../store/selectors';

const {accountsLabel} = accountElementStyles;

export const Accounts = () => {
  const {appState, dispatch} = useContext(AppContext);

  const accounts = getAccounts(appState);

  return (
    <>
      <Text style={accountsLabel}>Vos comptes :</Text>
      <ScrollView horizontal>
        {accounts.map(({id, name, totalRemaining}) => (
          <Account key={id} total={totalRemaining} name={name} />
        ))}
      </ScrollView>
    </>
  );
};

import React, {useContext} from 'react';
import {View, Text, Pressable} from 'react-native';
import {homeContainerStyles, homeElementStyles} from './styles';
import {onLogout} from '../../store/authentication/actions';
import {AppContext} from '../../store/store';
import {Accounts} from './accounts/Accounts';
import {getUserName} from '../../store/selectors';

const {container, homeHeader} = homeContainerStyles;
const {headerText, deconnexionButton, deconnexionButtonText} =
  homeElementStyles;

export const Home = () => {
  const {appState, dispatch} = useContext(AppContext);

  const username = getUserName(appState);
  const onClickDeconnexion = () => dispatch(onLogout());

  return (
    <View style={container}>
      <View style={homeHeader}>
        <View>
          <Text style={headerText}>Bonjour</Text>
          <Text style={headerText}>{username},</Text>
        </View>
        <Pressable onPress={onClickDeconnexion} style={deconnexionButton}>
          <Text style={deconnexionButtonText}>Déconnexion</Text>
        </Pressable>
      </View>
      <Accounts />
    </View>
  );
};

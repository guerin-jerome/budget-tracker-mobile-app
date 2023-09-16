import React, {useContext} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';
import {homeContainerStyles, homeElementStyles} from './styles';
import {onLogout} from '../../store/authentication/actions';
import {AppContext} from '../../store/store';

const {container, homeHeader} = homeContainerStyles;
const {headerText, deconnexionButton, deconnexionButtonText} =
  homeElementStyles;

export const Home = () => {
  const {dispatch} = useContext(AppContext);

  const onClickDeconnexion = () => dispatch(onLogout());

  return (
    <View style={container}>
      <View style={homeHeader}>
        <View>
          <Text style={headerText}>Bonjour</Text>
          <Text style={headerText}>Axelle,</Text>
        </View>
        <Pressable onPress={onClickDeconnexion} style={deconnexionButton}>
          <Text style={deconnexionButtonText}>Déconnexion</Text>
        </Pressable>
      </View>
      <ScrollView horizontal>
        <View></View>
      </ScrollView>
    </View>
  );
};

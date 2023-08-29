/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from './constants';
import {AppStore} from './store/store';
import {Authentication} from './features/authentication/Authentication';

const style = StyleSheet.create({
  appContainer: {
    height: screenHeight,
    width: screenWidth,
  },
});

/** Display */
const App = () => (
  <AppStore>
    <SafeAreaView>
      <StatusBar />
      <ScrollView style={style.appContainer}>
        <Authentication type="login" />
      </ScrollView>
    </SafeAreaView>
  </AppStore>
);

export default App;

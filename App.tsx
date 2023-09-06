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
import server from './mocks/server';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    server: any;
  }
}

if (window.server) {
  window.server.shutdown();
}

window.server = server();

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
        <Authentication />
      </ScrollView>
    </SafeAreaView>
  </AppStore>
);

export default App;

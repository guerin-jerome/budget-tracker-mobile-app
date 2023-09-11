/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useContext, useMemo} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
} from 'react-native';
import {screenHeight, screenWidth} from './constants';
import {AppContext, AppStore} from './store/store';
import {Authentication} from './features/authentication/Authentication';
import server from './mocks/server';
import {
  getIsLoginSucceed,
  getIsRegisterSucceed,
  getUser,
} from './store/selectors';

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

const Displayer = () => {
  const {appState} = useContext(AppContext);

  const isLogged = getIsLoginSucceed(appState);
  const isRegistered = getIsRegisterSucceed(appState);
  const user = getUser(appState);

  const isAuthenticated = useMemo(
    () => (isLogged || isRegistered) && Object.values(user).length > 0,
    [isLogged, isRegistered, user],
  );

  return (
    <>
      {!isAuthenticated && <Authentication />}
      {isAuthenticated && <Text>Bienvenue vous êtes bien connecté !</Text>}
    </>
  );
};

const App = () => {
  return (
    <AppStore>
      <SafeAreaView>
        <StatusBar />
        <ScrollView style={style.appContainer}>
          <Displayer />
        </ScrollView>
      </SafeAreaView>
    </AppStore>
  );
};

export default App;

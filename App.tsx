/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useReducer, createContext, useMemo} from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import {TAppContext} from './features/types';
import {reducer} from './features/reducer';
import {screenHeight, screenWidth} from './features/common/constants';
import {AuthenticationContainer} from './features/authentication/containers/AuthenticationContainer';

/** Style */
const style = StyleSheet.create({
  appContainer: {
    height: screenHeight,
    width: screenWidth,
  },
});

/** State management */
export const initialState = {user: null};

const AppContext = createContext<TAppContext>({
  appState: initialState,
  dispatch: () => null,
});

/** Display */
const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const appContextValue = useMemo(
    () => ({appState, dispatch}),
    [appState, dispatch],
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <SafeAreaView>
        <StatusBar />
        <ScrollView style={style.appContainer}>
          <AuthenticationContainer type="login" />
        </ScrollView>
      </SafeAreaView>
    </AppContext.Provider>
  );
};

export default App;

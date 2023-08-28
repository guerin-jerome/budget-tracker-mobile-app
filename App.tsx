/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, {useReducer, createContext, useMemo} from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {TAppContext} from './features/types';
import {reducer} from './features/reducer';
import {Login} from './features/authentication/components/Login';

const initialState = {user: null};

const AppContext = createContext<TAppContext>({
  appState: initialState,
  dispatch: () => null,
});

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  const appContextValue = useMemo(
    () => ({appState, dispatch}),
    [appState, dispatch],
  );

  return (
    <AppContext.Provider value={appContextValue}>
      <NativeBaseProvider>
        <SafeAreaView>
          <StatusBar />
          <ScrollView
            style={{
              height: '100%',
              width: '100%',
            }}>
            <View>
              <Login />
            </View>
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
};

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useReducer } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import { createContext } from 'react';
import { NativeBaseProvider } from 'native-base';
import { TAppContext } from './features/types';
import { reducer } from './features/reducer';

const initialState = { user: null };

const AppContext = createContext<TAppContext>({
  appState: initialState,
  dispatch: () => {}, 
});

const App = () => {
  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ appState, dispatch }}>
      <NativeBaseProvider>
        <SafeAreaView>
          <StatusBar />
          <ScrollView>
            <View>
              <Text>Hello</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}

export default App;

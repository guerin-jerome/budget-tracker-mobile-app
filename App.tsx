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
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  Header,
  LearnMoreLinks,
} from 'react-native/Libraries/NewAppScreen';

import { createContext } from 'react';
import { reducer } from './store/reducer';
import { Button, Heading, Input, NativeBaseProvider, Text } from 'native-base';
import { USER_ACTION_TYPES } from './store/user/constants';

const AppContext = createContext<AppState>({ user: null });

function App(): JSX.Element {
  const [appState, dispatch] = useReducer(reducer, { user: null });
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const onClickButton = () => {
    dispatch({ type: "user.set", payload: {
      name: 'John Doe',
      id: '',
      email: '',
      phone: '',
      password: '',
      birthDate: '',
      creationDate: ''
    }});
  }

  const onClickButtonn = () => {
    dispatch({
      type: "user.reset",
      payload: null
    });
  }

  return (
    <AppContext.Provider value={appState}>
      <NativeBaseProvider>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}>
          <View
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}>
              <Heading>My name : {appState.user?.name}</Heading>
              <Input placeholder="Enter your name" />
              <Button onPress={onClickButton}>Submit</Button>
              <Button onPress={onClickButtonn}>Reset</Button>
          </View>
        </ScrollView>
      </SafeAreaView>
      </NativeBaseProvider>
    </AppContext.Provider>
  );
}

export default App;

import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../common/constants';

/**
 * Authentication
 */

const authenticationContainerStyles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    padding: 25,
  },
  header: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    // backgroundColor: 'green',
    flex: 3,
  },
  footer: {
    // backgroundColor: 'blue',
    justifyContent: 'flex-start',
    flex: 1,
  },
});

const authenticationElementStyles = StyleSheet.create({
  logo: {
    height: 60,
    width: 60,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 25,
  },
  firstButton: {
    backgroundColor: '#dd8a19',
    borderRadius: 3,
    padding: 12,
    marginBottom: 15,
  },
  firstButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16,
  },
  secondElement: {
    flexDirection: 'row',
  },
  secondElementLink: {
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    color: '#dd8a19',
    fontSize: 16,
  },
  secondElementText: {
    fontSize: 16,
  },
});

/**
 * Login
 */

const loginContainerStyles = StyleSheet.create({});

const loginElementStyles = StyleSheet.create({});

export {
  authenticationContainerStyles,
  authenticationElementStyles,
  loginContainerStyles,
  loginElementStyles,
};

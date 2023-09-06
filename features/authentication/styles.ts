import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../constants';

export const authenticationContainerStyles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    padding: 25,
  },
  header: {
    flex: 1,
    justifyContent: 'center',
  },
  body: {
    justifyContent: 'center',
    flex: 3,
  },
  footer: {
    justifyContent: 'flex-start',
    flex: 1,
  },
});

export const authenticationElementStyles = StyleSheet.create({
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
  label: {
    fontSize: 15,
  },
  input: {
    borderRadius: 3,
    borderWidth: 2,
    padding: 10,
    marginBottom: 15,
  },
  errorText: {
    fontSize: 15,
    color: '#c0392b',
  },
});

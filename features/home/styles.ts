import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../constants';

export const homeContainerStyles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    paddingVertical: 25,
    paddingLeft: 25,
  },
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingRight: 25,
  },
});

export const homeElementStyles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1f2937',
  },
  deconnexionButton: {
    backgroundColor: '#1f2937',
    borderRadius: 3,
    padding: 12,
    marginBottom: 15,
  },
  deconnexionButtonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 14,
  },
});

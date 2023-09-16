import {StyleSheet} from 'react-native';
import {screenHeight, screenWidth} from '../../constants';

export const homeContainerStyles = StyleSheet.create({
  container: {
    height: screenHeight,
    width: screenWidth,
    padding: 25,
  },
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export const homeElementStyles = StyleSheet.create({
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deconnexionButton: {
    backgroundColor: '#dd8a19',
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

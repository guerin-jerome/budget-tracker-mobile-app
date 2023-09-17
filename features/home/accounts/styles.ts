import {StyleSheet} from 'react-native';

export const accountContainerStyles = StyleSheet.create({
  accountContainer: {
    padding: 20,
    maxHeight: 135,
    borderRadius: 3,
    borderWidth: 2,
    marginRight: 18,
  },
  accountHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
});

export const accountElementStyles = StyleSheet.create({
  accountLogo: {
    height: 40,
    width: 40,
    borderRadius: 3,
    borderColor: 'grey',
    backgroundColor: 'grey',
    marginRight: 8,
  },
  accountName: {
    fontSize: 18,
    fontWeight: '300',
    color: '#1f2937',
  },
  accountsLabel: {
    fontSize: 15,
    color: '#1f2937',
    marginBottom: 10,
  },
  accountTotal: {
    fontSize: 40,
    fontWeight: '800',
    color: '#1f2937',
  },
});

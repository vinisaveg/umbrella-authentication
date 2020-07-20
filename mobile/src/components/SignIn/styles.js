import { StyleSheet, Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  input: {
    width: Dimensions.get('window').width - 100,
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    color: '#fff',
    fontSize: 18,
    marginBottom: 30,
  },
  btnPrimary: {
    marginTop: 20,
    backgroundColor: '#fff',
    borderRadius: 26,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnPrimaryText: {
    color: '#F47660',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  btnSecundary: {
    marginTop: 20,
    borderRadius: 26,
    borderWidth: 1,
    borderColor: '#fff',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnSecundaryText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

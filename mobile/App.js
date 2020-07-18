import React from 'react';
import { SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.container}>
          <Image source={require('./src/assets/icons/umbrella-a.png')} />
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>Umbrella Authentication</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    backgroundColor: '#F47660',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default App;

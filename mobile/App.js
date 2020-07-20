import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Image,
} from 'react-native';
import SignIn from './src/components/SignIn/SignIn';

const App = () => {
  return (
    <SafeAreaView style={styles.body}>
      <KeyboardAvoidingView>
        <View style={styles.containerLogo}>
          <Image
            style={{ width: 80, height: 80 }}
            source={require('./src/assets/icons/umbrella-a.png')}
          />
        </View>

        <SignIn />
      </KeyboardAvoidingView>
    </SafeAreaView>
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
  containerLogo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 50,
  },
});

export default App;

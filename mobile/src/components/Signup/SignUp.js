import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';

import { styles } from '../common/styles';

export default (props) => {
  const [offSet] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.parallel([
      Animated.spring(offSet.y, {
        toValue: 0,
        speed: 3,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const redirectSignIn = () => {
    props.navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.containerLogo}>
        <Image
          style={{ width: 80, height: 80 }}
          source={require('../../assets/icons/umbrella-a.png')}
        />
      </View>
      <Animated.View
        style={{ opacity: opacity, transform: [{ translateY: offSet.y }] }}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#fff"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#fff"
          autoCorrect={false}
          onChangeText={() => {}}
        />

        <View>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          {/* React Native Vector Icons */}
        </View>

        <View>
          <TextInput
            style={styles.input}
            placeholder="Confirm password"
            placeholderTextColor="#fff"
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={() => {}}
          />

          {/* React Native Vector Icons */}
        </View>

        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnLink}
          onPress={redirectSignIn}
          accessibilityLabel="Go back to Sign In">
          <Text style={{ color: '#fff', fontSize: 16 }}>
            Already have an account?
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

import React, { useState, useEffect } from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Animated,
  Image,
} from 'react-native';
import { styles } from './styles';

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

  return (
    <Animated.View
      style={{ opacity: opacity, transform: [{ translateY: offSet.y }] }}>
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

        {/* Change w/ React Native Icons */}
        <Image
          style={{ position: 'absolute', right: 25, top: 10 }}
          source={require('../../assets/icons/pass-secret.png')}
        />
      </View>

      <TouchableOpacity style={styles.btnPrimary}>
        <Text style={styles.btnPrimaryText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecundary}>
        <Text style={styles.btnSecundaryText}>Sign Up</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

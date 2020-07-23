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

import Icon from 'react-native-vector-icons/Ionicons';

export default (props) => {
  const [offSet] = useState(new Animated.ValueXY({ x: 0, y: 80 }));
  const [opacity] = useState(new Animated.Value(0));
  const [eyeState, setEyeState] = useState('eye-off-outline');

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

  const redirectSignUp = () => {
    props.navigation.navigate('SignUp');
  };

  const handleEye = () => {
    let eyeCurrentState =
      eyeState === 'eye-off-outline' ? 'eye-outline' : 'eye-off-outline';

    setEyeState(eyeCurrentState);
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

          <TouchableOpacity
            style={{ position: 'absolute', right: 20, top: 10 }}
            onPress={handleEye}>
            <Icon color="#fff" name={eyeState} size={25} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.btnPrimary}>
          <Text style={styles.btnPrimaryText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnSecundary} onPress={redirectSignUp}>
          <Text style={styles.btnSecundaryText}>Sign Up</Text>
        </TouchableOpacity>
      </Animated.View>
    </SafeAreaView>
  );
};

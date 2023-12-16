import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { styles, Colors } from '../../../customs/Styles';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { UserStackParamList, UserStackScreensEnum } from '../../../RootParams/UserStackParams';

type SplashNavigationProp = StackNavigationProp<UserStackParamList, UserStackScreensEnum.Splash>;


const Splash = () => {

  const navigation = useNavigation<SplashNavigationProp>();

  // delay 2s and navigate to Login
  const delayTime = 1500;

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(UserStackScreensEnum.SignIn);
    }, delayTime);
  }, []);


  return (
    <View style={[styles.container1, { alignItems: 'center' }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.white} />
      <TouchableOpacity
       style={[{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }]}
        onPress={() => navigation.navigate(UserStackScreensEnum.SignIn)}
        >
        <Image
          source={require('../../../../assets/images/contents/NIT.png')}
          style={[{ width: '60%', height: '60%' }]}
          resizeMode="contain"
        />
      </TouchableOpacity>

    </View>
  );
};

export default Splash;

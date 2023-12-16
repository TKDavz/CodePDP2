import {View, Text, StatusBar} from 'react-native';
import React from 'react';
import {Colors, fonts, styles} from '../../../customs/Styles';
import SettingBar from '../../../customs/bars/SettingBar';
import Big from '../../../customs/cards/Big';
import { StackNavigationProp } from '@react-navigation/stack';
import { UserStackParamList, UserStackScreensEnum } from '../../../RootParams/UserStackParams';
import { RootStackParamList, RootStackScreensEnum } from '../../../RootParams/RootStackParams';
import { AppTabParamList, AppTabScreensEnum } from '../../../RootParams/AppTabParams';
import { useNavigation } from '@react-navigation/native';

type UserNavigationProp = StackNavigationProp<AppTabParamList, AppTabScreensEnum.User>;
type RootNavigationProp = StackNavigationProp<RootStackParamList, RootStackScreensEnum.UserNavigation>;

const User = () => {
  
  const navigation = useNavigation<UserNavigationProp>();
  const rootNavigation = useNavigation<RootNavigationProp>();


  const onLogoutPress = async () => {
    rootNavigation.navigate(RootStackScreensEnum.UserNavigation);
  }


  return (
    <View style={[styles.container2]}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
      />

      <Text style={[fonts.title, {color: Colors.black, marginVertical: 20}]}>
        Setting
      </Text>

      <SettingBar title='Logout' onPress={() => {onLogoutPress()}}/>
      <SettingBar title='Edit Information' onPress={() => {}}/>
      {/* <SettingBar/>
      <SettingBar/>
      <SettingBar/>
      <SettingBar/>
      <SettingBar/>
      <SettingBar/> */}
    </View>
  );
};

export default User;

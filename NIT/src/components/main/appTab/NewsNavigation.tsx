import React, { useContext } from 'react'
import { Image } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppTabScreens, AppTabScreensEnum } from '../../RootParams/AppTabParams';
import { Colors } from '../../customs/Styles';

const BottomTab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName={AppTabScreensEnum.Home}

      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let icon;
            if (route.name === AppTabScreensEnum.Home) {
              icon = focused
                ? <Image source={require('../../../assets/images/icons/home_fill.png')} style={{ width: 25, height: 25, tintColor: color }} />
                : <Image source={require('../../../assets/images/icons/home_line.png')} style={{ width: 25, height: 25 , tintColor: color }} />
            } else if (route.name ===  AppTabScreensEnum.Activity) {
              icon = focused 
              ? <Image source={require('../../../assets/images/icons/activity_fill.png')} style={{ width: 25, height: 25, tintColor: color }} />
              : <Image source={require('../../../assets/images/icons/activity_linepng.png')} style={{ width: 25, height: 25, tintColor: color }} />;
            } else if (route.name ===  AppTabScreensEnum.User) {
              icon = focused
              ? <Image source={require('../../../assets/images/icons/user_fill.png')} style={{ width: 25, height: 25, tintColor: color }} />
              : <Image source={require('../../../assets/images/icons/user_line.png')} style={{ width: 25, height: 25, tintColor: color }} />;
            } else if (route.name ===  AppTabScreensEnum.Seach) {
              icon = focused
              ? <Image source={require('../../../assets/images/icons/search_fill.png')} style={{ width: 25, height: 25, tintColor: color }} />
              : <Image source={require('../../../assets/images/icons/search_line.png')} style={{ width: 25, height: 25, tintColor: color }} />;
            }
            // You can return any component that you like here!
            return icon;
          },
          headerShown: false,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: 'gray',
        })}
    >
      {
        AppTabScreens().map((item, index) =>
          <BottomTab.Screen
            key={index}
            name={item.name}
            component={item.component}
            options={item.options}
          />
        )
      }
    </BottomTab.Navigator>
  )
}

export default TabNavigation


import React, { useContext } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import User from '../appTab/Screens/User';
import { UserStackScreens, UserStackScreensEnum } from '../../RootParams/UserStackParams';
const Stack = createStackNavigator();



const UserNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={UserStackScreensEnum.Splash}
      screenOptions={{
        headerShown: false
      }}>
        {
          UserStackScreens().map((item, index) => 
            <Stack.Screen
              key={index}
              name={item.name}
              component={item.component}
              options={item.options}
            />
          )
        }
    </Stack.Navigator>
  )
}

export default UserNavigation
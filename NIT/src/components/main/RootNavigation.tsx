import React, { useContext } from 'react'
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RootStackScreens, RootStackScreensEnum } from '../RootParams/RootStackParams';

const Stack = createStackNavigator();



const RootNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={RootStackScreensEnum.UserNavigation}
      screenOptions={{
        headerShown: false
      }}>
        {
          RootStackScreens().map((item, index) => 
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

export default RootNavigation
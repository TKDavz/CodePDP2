/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import UserNavigation from './src/components/main/userStack/UserNavigation';
import TabNavigation from './src/components/main/appTab/NewsNavigation';
import RootNavigation from './src/components/main/RootNavigation';
import { UserProvider } from './src/components/main/userStack/UserContext';
import { NewsProvider } from './src/components/main/appTab/NewsContext';
import ReadNew from './src/components/main/appTab/appModals/ReadNew';


function App(): JSX.Element {

  return (

    <UserProvider>
      <NewsProvider>
        <NavigationContainer>
          <RootNavigation/>
        </NavigationContainer>
      </NewsProvider>
    </UserProvider>

  );
}

const styles = StyleSheet.create({
});

export default App;

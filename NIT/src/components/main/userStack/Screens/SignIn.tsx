import { View, Text, Image, StatusBar, Alert, ScrollView } from 'react-native';
import React from 'react';
import { Colors, components, fonts, styles } from '../../../customs/Styles';
import Username from '../../../customs/forms/Username';
import Password from '../../../customs/forms/Password';
import Filled from '../../../customs/buttons/Filled';
import Linear from '../../../customs/buttons/Linear';
import Link from '../../../customs/buttons/Link';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { UserStackParamList, UserStackScreensEnum } from '../../../RootParams/UserStackParams';
import { RootStackParamList, RootStackScreensEnum } from '../../../RootParams/RootStackParams';
import { UserContext } from '../UserContext';

type SignInNavigationProp = StackNavigationProp<UserStackParamList, UserStackScreensEnum.SignIn>;
type RootNavigationProp = StackNavigationProp<RootStackParamList, RootStackScreensEnum.UserNavigation>;

const SignIn = () => {

  const navigation = useNavigation<SignInNavigationProp>();
  const rootNavigation = useNavigation<RootNavigationProp>();


  const [isLoading, setIsLoading] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('test.mail@gmail.com');
  const [password, setPassword] = React.useState('');
  const { onLogin } = React.useContext(UserContext);

  const [error, setError] = React.useState([false, false]);


  const onLoginPress = async () => {
    if (email === '' || password === '' || error[0] || error[1]) {
      Alert.alert('Please fill in all fields correctly');
      return;
    }
    console.log('username: ', username);
    console.log('password: ', password);

    setIsLoading(true);
    const result = await onLogin(username, password);
    setIsLoading(false);
    if (!result) {
      Alert.alert('Login failed');
    } else {
      rootNavigation.navigate(RootStackScreensEnum.NewsNavigation);
    }
  }

  return (
    <ScrollView>
      <View style={[styles.container1]}>
        <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

        <Image
          style={[
            { width: 70, height: 70, marginVertical: 20, alignSelf: 'center' },
          ]}
          source={require('../../../../assets/images/contents/NIT.png')}
        />

        <View style={[styles.container2, { marginHorizontal: 20 }]}>
          <Username style={{ marginTop: 100, marginBottom: 15 }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Password style={{ marginTop: 35, marginBottom: 15 }}
            title='Password'
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <Link title="Forgot Password" style={{ alignSelf: 'flex-end' }} />

          <Filled
            style={{
              marginVertical: 35,
              alignSelf: 'center',
              width: 180,
            }}
            title="Sign in"
            onPress={() => {
              onLoginPress();
              // rootNavigation.navigate(RootStackScreensEnum.NewsNavigation);
            }}
          />

          <View
            style={[
              components.rowSpaceBetween,
              { alignItems: 'center', marginBottom: 30, marginTop: 20 },
            ]}>
            <View style={[components.dash, { width: '30%' }]} />
            <Text style={[fonts.text]}>or sign in with</Text>
            <View style={[components.dash, { width: '30%' }]} />
          </View>

          <View style={[components.rowSpaceBetween]}>
            <Linear
              icon1={require('../../../../assets/images/icons/google_line.png')}
              icon2={require('../../../../assets/images/icons/google_fill.png')}
            />
            <Linear
              icon1={require('../../../../assets/images/icons/facebook_line.png')}
              icon2={require('../../../../assets/images/icons/facebook_fill.png')}
            />
            <Linear
              icon1={require('../../../../assets/images/icons/twitter_line.png')}
              icon2={require('../../../../assets/images/icons/twitter_fill.png')}
            />
            <Linear
              icon1={require('../../../../assets/images/icons/instagram_line.png')}
              icon2={require('../../../../assets/images/icons/instagram_fill.png')}
            />
          </View>

          <View
            style={[
              components.rowSpaceEvently,
              { justifyContent: 'center', marginVertical: 20 },
              { gap: 5 }
            ]}>
            <Text style={[fonts.text, { color: Colors.black }]}>Don't have an account?</Text>
            <Link title="Register"
              onPress={() => navigation.navigate(UserStackScreensEnum.SignUp)} />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

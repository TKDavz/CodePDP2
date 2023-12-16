import { View, Text, Image, StatusBar, Alert, ScrollView } from 'react-native';
import React from 'react';
import { Colors, components, fonts, styles } from '../../../customs/Styles';
import Username from '../../../customs/forms/Username';
import Password from '../../../customs/forms/Password';
import Filled from '../../../customs/buttons/Filled';
import Linear from '../../../customs/buttons/Linear';
import Link from '../../../customs/buttons/Link';
import Form from '../../../customs/forms/Form';
import Radio from '../../../customs/others/Radio';
import RadioGroup from '../../../customs/others/RadioGroup';

import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { UserStackParamList, UserStackScreensEnum } from '../../../RootParams/UserStackParams';
import { UserContext } from '../UserContext';

type SignUpNavigationProp = StackNavigationProp<UserStackParamList, UserStackScreensEnum.SignUp>;


const SignUp = () => {

  const navigation = useNavigation<SignUpNavigationProp>();


  const [isLoading, setIsLoading] = React.useState(false);

  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('test.mail@gmail.com');
  const [password, setPassword] = React.useState('');

  const { onRegister } = React.useContext(UserContext);

  const [error, setError] = React.useState([false, false]);


  const onRegisterPress = async () => {
    if (username === '' || password === '' || error[0] || error[1]) {
      Alert.alert('Please fill in all fields correctly');
      return;
    }

    setIsLoading(true);
    const result = await onRegister(username, password);

    setIsLoading(false);
    if (!result) {
      Alert.alert('Register failed');
    } else {
      navigation.navigate(UserStackScreensEnum.SignIn);
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
          <Form
            placeholder="Username"
            style={{ marginTop: 30, marginBottom: 15 }}
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <Form
            placeholder="Password"
            style={{ marginTop: 15, marginBottom: 15 }}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          <View
            style={[
              components.rowSpaceBetween,
              { alignItems: 'center', marginTop: 15, marginBottom: 15 },
            ]}>
            <Form placeholder="Email" style={{ width: '70%' }} />
            <Link title="Send OTP" style={{ alignSelf: 'flex-end' }} />
          </View>

          <Form placeholder="OTP" style={{ marginTop: 15, marginBottom: 15 }} />

          <View style={[components.rowSpaceBetween, { marginVertical: 15 }]}>
            <Text style={fonts.text}>I am:</Text>

            <RadioGroup
              options={[{ value: '1', label: 'Male' }, { value: '2', label: 'Female' }]}
              onValueChange={() => { }}
              style={{ width: '60%' }}
            />
          </View>

          <Filled
            style={{
              marginVertical: 10,
              alignSelf: 'center',
              width: 180,
            }}
            title="Sign up"
            onPress={() => onRegisterPress()}
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
              { justifyContent: 'center', marginVertical: 10 },
              { gap: 5 }
            ]}>
            <Text style={[fonts.text, { color: Colors.black }]}>Do you already have an account?</Text>
            <Link title="Login"
              onPress={() => navigation.navigate(UserStackScreensEnum.SignIn)} />
          </View>

          <View
            style={[
              {
                justifyContent: 'center',
                marginVertical: 20,
                alignItems: 'center',
              },
            ]}>
            <Text style={[fonts.text, { color: Colors.black }]}>
              By signing up to NIT you agree to our
            </Text>
            <Link title="Term and codition" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

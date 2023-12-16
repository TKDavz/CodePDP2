import {View, Text, TextInput, TouchableOpacity, Image, ViewStyle} from 'react-native';
import React from 'react';
import {components, fonts} from '../Styles';
// import { set } from 'mongoose';

type Props = {
  title?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style ?: ViewStyle | ViewStyle[];
};

const Password = (prop: Props) => {
  const [hide, setHide] = React.useState(true);
  let icon = hide ? require('../../../assets/images/icons/eyeClose_fill.png') : require('../../../assets/images/icons/eye_fill.png');
  const handleSecure = () => {
    setHide(!hide);
  };
  return (
    <View style={[prop?.style]}>
      <Text style={[fonts.tag, {color: 'black'}]}>{prop?.title || 'Password'}</Text>
      <View style={[components.textPass_Container]}>
        <TextInput
          style={[components.textPass_input, fonts.text, {color: 'black'}]}
          // placeholder={prop?.title || 'Password'}
          value={prop?.value}
          onChangeText={newText => {
            prop.onChangeText && prop.onChangeText(newText);
          }}
          secureTextEntry={hide}
        />

        <TouchableOpacity onPress={()=>{
          handleSecure()
        }}>
          <Image source={icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
};


export default Password;

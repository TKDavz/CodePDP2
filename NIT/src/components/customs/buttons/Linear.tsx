import {
  TouchableHighlight,
  TouchableOpacity,
  ViewStyle,
  Image,
  ColorValue,
  TextStyle,
  ImageStyle,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, components, fonts} from '../Styles';

type Prop = {
  onPress?: () => {};
  title?: string;
  icon1?: any;
  icon2?: any;
  style?: ViewStyle | ViewStyle[];
  fontStyle?: TextStyle | TextStyle[];
  iconStyle?: ImageStyle | ImageStyle[];
  iconORtext?: 'text' | 'icon';
};

const Linear = (prop: Prop) => {
  const [isPress, setIsPress] = useState(false);
  const textMode: boolean = prop?.iconORtext === 'text' ? true : false || false;

  return (
    <TouchableHighlight
      style={[components.btnLinear, prop?.style]}
      underlayColor={Colors.primary}
      onShowUnderlay={() => setIsPress(true)}
      onHideUnderlay={() => {
        setIsPress(false);
      }}
      onPress={() => {
        prop?.onPress && prop.onPress();
      }}
      activeOpacity={0.8}>
      <View>
        <Image
          source={
            (isPress ? prop?.icon2 : prop?.icon1 )|| require('../../../assets/images/icons/email_line.png')
          }
          style={[
            {
              tintColor: isPress ? Colors.white : Colors.primary,
              display: textMode ? 'none' : 'flex',
            },
            prop?.iconStyle,
          ]}
        />
        <Text
          style={[
            fonts.link,
            {
              color: isPress ? Colors.white : Colors.primary,
              display: textMode ? 'flex' : 'none',
            },
            prop?.fontStyle,
          ]}>
          {prop?.title || 'Button'}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

export default Linear;

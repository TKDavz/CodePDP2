import {View, Text, TouchableOpacity, ViewStyle, Image, ImageStyle, TextStyle} from 'react-native';
import React from 'react';
import {Colors, components, fonts} from '../Styles';

type Prop = {
  title?: string;
  icon?: any;
  onPress?: () => {};
  style?: ViewStyle | ViewStyle[];
  iconStyle?: ImageStyle | ImageStyle[];
  fontStyle?: TextStyle | TextStyle[];
};
const FilledIcon = (prop: Prop) => {
  return (
    <TouchableOpacity
      style={[components.btnFilledIcon, prop?.style]}
      activeOpacity={0.8}
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
      <Image
        source={
          prop?.icon || require('../../../assets/images/icons/email_line.png')
        }
        style={[{tintColor: Colors.primary}, prop?.iconStyle]}
      />
      <Text style={[fonts.link, {color: Colors.black}, prop?.fontStyle]}>
        {prop?.title || 'Title'}
      </Text>
    </TouchableOpacity>
  );
};

export default FilledIcon;

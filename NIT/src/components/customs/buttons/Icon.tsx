import {View, Text, ViewStyle, TouchableOpacity, Image, ColorValue} from 'react-native';
import React from 'react';
import {components, fonts} from '../Styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Prop = {
  onPress?: () => void;
  tint?: ColorValue;
  icon?: any;
  style?: ViewStyle | ViewStyle[];
};
const Icon = (prop: Prop) => {
  return (
    <TouchableOpacity
      style={[components.btnIcon, prop?.style]}
      activeOpacity={0.8}
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
      <Image
        source={
          prop?.icon || require('../../../assets/images/icons/email_line.png')
        }
        style={[{tintColor: prop?.tint || Colors.primary}]}
      />
    </TouchableOpacity>
  );
};

export default Icon;

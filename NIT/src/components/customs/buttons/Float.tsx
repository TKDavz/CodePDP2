import {View, Text, ViewStyle, TouchableOpacity, Image, ColorValue} from 'react-native';
import React from 'react';
import {components, Colors} from '../Styles';

type Prop = {
  onPress?: () => void;
  icon?: any;
  tint?: ColorValue;
  style?: ViewStyle | ViewStyle[];
};
const Float = (prop: Prop) => {
  return (
    <TouchableOpacity
      style={[components.btnFloat, prop?.style]}
      // activeOpacity={0.8}
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
      <Image
        source={
          prop?.icon || require('../../../assets/images/icons/email_line.png')
        }
        style={[{tintColor: prop?.tint || Colors.white, width: 30, height: 30}]}
      />
    </TouchableOpacity>
  );
};

export default Float;

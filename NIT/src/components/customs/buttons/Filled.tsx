import {View, Text, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {Colors, components, fonts} from '../Styles';

type Prop = {
  title?: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};
const Filled = (prop: Prop) => {
  return (
    <TouchableOpacity
      style={[components.btnFilled, prop?.style]}
      activeOpacity={0.8}
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
      <Text style={[fonts.title,{color: Colors.white}]}>{prop?.title || 'Title'}</Text>
    </TouchableOpacity>
  );
};

export default Filled;

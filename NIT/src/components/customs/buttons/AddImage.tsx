import {View, Text, TouchableOpacity, ViewStyle, Image} from 'react-native';
import React from 'react';
import {Colors, components, fonts} from '../Styles';

type Prop = {
  title?: string;
  icon?: any;
  onPress?: () => {};
  style?: ViewStyle | ViewStyle[];
};
const AddImage = (prop: Prop) => {
  return (
    <TouchableOpacity
      style={[components.btnAddImage, prop?.style]}
      activeOpacity={0.5}
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
              <Image
        source={
          prop?.icon || require('../../../assets/images/icons/email_line.png')
        }
        style={[{tintColor: Colors.black, marginBottom: 10}]}
      />
      <Text style={[fonts.title,{color: Colors.black}]}>{prop?.title || 'Title'}</Text>
    </TouchableOpacity>
  );
};

export default AddImage;

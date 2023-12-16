import {View, Image, TouchableOpacity, Text, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {Colors, components, fonts} from '../Styles';

type Prop = {
  onPress?: () => void;
  checked?: boolean;
  title?: string;
  style?: ViewStyle | ViewStyle[];
};

const Radio = (prop: Prop) => {
  return (
    <View style={[components.rowAlign, prop?.style]}>
      <TouchableOpacity
        onPress={() => {
          prop?.onPress && prop.onPress();
        }}
        style={[
          components.raido_Container,
          {
            borderColor: prop?.checked ? Colors.primary : Colors.black,
            borderWidth: prop?.checked ? 3 : 1,
          },
        ]}>
        {prop?.checked && (
          <Image
            source={require('../../../assets/images/icons/check_fill.png')}
            style={{width: 15, height: 15, tintColor: Colors.primary}}
          />
        )}
      </TouchableOpacity>

      <Text style={[prop?.checked ? fonts.link : fonts.tag, {marginLeft: 10 }]}>
        {prop?.title || 'Options'}
      </Text>
    </View>
  );
};

export default Radio;

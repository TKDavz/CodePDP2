import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {Colors, components, fonts} from '../Styles';

type Props = {
  title?: string;
  icon?: any;
  onPress?: () => void;
};
const SettingBar = (prop: Props) => {
  return (
    <TouchableOpacity
      style={[components.rowSpaceBetween, {paddingVertical: 10}]}
      onPress={() => {
        prop?.onPress?.() && prop?.onPress?.();
      }}>
      <View style={[components.rowAlign]}>
        <Image
          source={
            prop?.icon || require('../../../assets/images/icons/fire_line.png')
          }
          style={{width: 30, height: 30, marginRight: 5}}
        />
        <Text style={[fonts.text, {color: Colors.black}]}>
          {prop?.title || 'SettingBar'}
        </Text>
      </View>

      <Image
        source={require('../../../assets/images/icons/right_fill.png')}
        style={{width: 30, height: 30, marginRight: 5}}
      />
    </TouchableOpacity>
  );
};

export default SettingBar;

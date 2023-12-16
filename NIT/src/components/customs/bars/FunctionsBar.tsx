import {View, Text, Image, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {components} from '../Styles';
import Linear from '../buttons/Linear';
import Icon from '../buttons/Icon';

type Prop = {
  icon1?: any;
  icon2?: any;
  icon3?: any;
  onPress1?: () => void;
  onPress2?: () => void;
  onPress3?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const FunctionsBar = (prop: Prop) => {
  return (
    <View style={[components.rowSpaceBetween, prop?.style]}>
      <Icon
        icon={prop?.icon1 || require('../../../assets/images/icons/back.png')}
        onPress={() => {
          prop?.onPress1 && prop?.onPress1();
        }}
      />
      <View style={[components.rowSpaceBetween, {width: '28%'}]}>
        <Icon
          icon={
            prop?.icon2 ||
            require('../../../assets/images/icons/bookmark_line.png')
          }
          onPress={() => {
            prop?.onPress2 && prop?.onPress2();
          }}
        />
        <Icon
          icon={
            prop?.icon3 ||
            require('../../../assets/images/icons/share_line.png')
          }
          onPress={() => {
            prop?.onPress3 && prop?.onPress3();
          }}
        />
      </View>
    </View>
  );
};

export default FunctionsBar;

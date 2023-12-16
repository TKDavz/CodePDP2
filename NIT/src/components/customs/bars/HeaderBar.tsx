import {View, Text, Image, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import Linear from '../buttons/Linear';
import {Colors, components, fonts} from '../Styles';

type Props = {
  style?: ViewStyle | ViewStyle[];
}

const HeaderBar = (prop : Props) => {
  return (
    <View style={[components.rowSpaceBetween, {alignItems: 'center'}, prop?.style]}>
      <View style={[components.rowSpaceBetween, {width: 100, alignItems: 'center'}]}>
        <Image
          source={require('../../../assets/images/contents/NIT.png')}
          style={[{width: 50, height: 50}]}
        />

        <Text style={[fonts.title, {color: Colors.primary}]}>NIT</Text>
      </View>

      <TouchableOpacity
      activeOpacity={.7}
      style={[{width: 50, height: 50, alignItems: 'center', justifyContent: 'center'}]}
      >
        <Image source={require('../../../assets/images/icons/notification_line.png')}
        style={[{width: 30, height: 30, tintColor: Colors.primary}]}
        />
        
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;

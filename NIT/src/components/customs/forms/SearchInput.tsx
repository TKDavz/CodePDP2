import {
  View,
  Text,
  TextInput,
  TextStyle,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors, components, fonts} from '../Styles';

type Prop = {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  style?: TextStyle | TextStyle[];
  onSearchPress?: () => void;
};
const SearchInput = (prop: Prop) => {
  return (
    <View
      style={[
        components.rowSpaceBetween,
        {alignItems: 'center', backgroundColor: Colors.tertiary},
      ]}>
      <TextInput
        style={[
          components.textInput,
          {backgroundColor: Colors.tertiary, borderWidth: 0, width: '90%'},
          fonts.text,
          prop?.style,
        ]}
        placeholder={prop?.placeholder || 'Input'}
        onChangeText={newText => {
          prop?.onChangeText && prop.onChangeText(newText);
        }}
      />
      <TouchableOpacity
        onPress={() => {
          prop?.onSearchPress && prop.onSearchPress();
        }}
      >
        <Image
          source={require('../../../assets/images/icons/search.png')}
          style={{width: 25, height: 25}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

import {View, Text, TextInput, TextStyle} from 'react-native';
import React from 'react';
import {components, fonts} from '../Styles';

type Prop = {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  style?: TextStyle | TextStyle[];
};
const Form = (prop: Prop) => {
  return (
    <TextInput
      style={[components.textForm, fonts.text, prop?.style, {color: 'black'}]}
      placeholder={prop?.placeholder || 'Input'}
      placeholderTextColor={'black'}
      value={prop?.value}
      onChangeText={newText => {
        prop?.onChangeText && prop.onChangeText(newText);
      }}
    />
  );
};

export default Form;

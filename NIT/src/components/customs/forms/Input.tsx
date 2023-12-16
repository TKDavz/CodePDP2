import {View, TextInput, TextStyle} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors, components} from '../Styles';

type Prop = {
  onChangeText?: (text: string) => void;
  style?: TextStyle | TextStyle[];
};
const Input = (prop: Prop) => {
  const [text, setText] = useState('');
  const [focused, setFocused] = useState(false);

  useEffect(() => {
    prop?.onChangeText && prop.onChangeText(text);
  }, [text]);

  
  return (
    <TextInput
      style={[
        components.textInput,
        {
          borderColor: focused ? Colors.primary : Colors.secondary,
          backgroundColor: focused ? 'transparent' : Colors.secondary,
        },
        prop?.style,
      ]}
      onChangeText={(newText) => {
        setText(newText);
      }}
      onFocus={() => {
        setFocused(true);
      }}
      onBlur={() => {
        setFocused(false);
      }}
      value={text}
    />
  );
};

export default Input;

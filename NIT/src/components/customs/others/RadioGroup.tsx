import React, {useState} from 'react';
import Radio from './Radio';
import { View, ViewStyle } from 'react-native';
import { components } from '../Styles';

type RadioOption = {
  value: string;
  label: string;
};

type Prop = {
  options: RadioOption[];
  onValueChange: (value: string) => void;
  style? : ViewStyle | ViewStyle[];
};

const RadioGroup = (prop: Prop) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handlePress = (value: string) => {
    setSelectedValue(value);
    prop.onValueChange(value);
  };

  return (
    <View style={[components.rowSpaceBetween,prop?.style]}>
      {prop.options.map((option) => (
        <Radio
          key={option.value}
          onPress={() =>{ handlePress(option.value)}}
          checked={selectedValue === option.value}
          title={option.label}
        />
      ))}
    </View>
  );
};

export default RadioGroup;

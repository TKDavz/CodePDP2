import {View, Text, Image, TouchableOpacity, ViewStyle} from 'react-native';
import React from 'react';
import {components, fonts, Colors} from '../Styles';

type Props = {
  title?: string;
  image?: any;
  tag?: string;
  time?: string;
  style?: ViewStyle | ViewStyle[];
  onPress? : () => void;
}

const Small = (prop : Props) => {
  const title = 'The Florida Governor debate hits the fan';

  return (
    <TouchableOpacity style={[components.cardSmall_Container, components.rowSpaceBetween, prop?.style]}
    onPress={prop.onPress}>

      <View>
      <Text style={[fonts.title, {color: Colors.black, width: 200}]}>
        {prop?.title || title}
      </Text>
        <View
          style={[
            components.rowSpaceBetween,
            {
              flex: 1,
              justifyContent: 'flex-start',
              alignItems: 'center',
            },
          ]}>
          <Image
            source={ require('../../../assets/images/icons/tag.png')}
            style={{width: 15, height: 15, tintColor: Colors.accent}}
          />

          <Text style={[fonts.text, {color: Colors.accent}]}>
            {prop?.tag ||"Tag"}
          </Text>

          <View
            style={[
              components.dot,
              {marginHorizontal: 5, backgroundColor: Colors.accent},
            ]}
          />

          <Text style={[fonts.text]}>{prop?.time || "4 mins ago"}</Text>
        </View>
      </View>

      <Image
        source={prop?.image ? {uri: prop?.image} :require('../../../assets/images/contents/CNNnews.jpeg')}
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 20,
          },
        ]}
      />
    </TouchableOpacity>
  );
};

export default Small;

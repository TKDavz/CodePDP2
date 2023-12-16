import {View, Text, ColorValue, Image, TouchableOpacity, ViewStyle} from 'react-native';
import React, {useState} from 'react';
import {components, fonts, Colors} from '../Styles';

type Props = {
  title?: string;
  image?: any;
  tag?: string;
  time?: string;
  onPress?: () => void;
  style?: ViewStyle | ViewStyle[];
};

const Medium = (prop : Props) => {
  const title = 'The Florida Governor debate hits the fan';

  return (
    <TouchableOpacity
      style={[
        components.cardMedium_Container,
        prop?.style,
        {maxWidth: 310, minWidth: 300}
      ]}
      activeOpacity={0.8}
      onPress={() => {
        prop?.onPress && prop?.onPress();
      }}>
      <View>
        {/* cover */}
        <Image
          source={prop?.image ? {uri: prop?.image } : require('../../../assets/images/contents/CNNnews.jpeg')}
          style={{
            width: 300,
            height: 150,
            borderRadius: 20,
          }}
        />

        {/* title */}
        <Text
          style={[
            fonts.text,
            {
                width: '90%',
              color: Colors.black,
              marginVertical: 10,
            },
          ]}>
          {prop.title}
        </Text>

        {/* Tag */}
        <View
          style={[
            components.rowSpaceBetween,
            {
              justifyContent: 'flex-start',
              minWidth: 55,
              alignItems: 'center',
            },
          ]}>
          <Image
            source={require('../../../assets/images/icons/tag.png')}
            style={{width: 15, height: 15, tintColor: Colors.accent}}
          />

          <Text style={[fonts.tag, {color: Colors.accent, paddingLeft: 5}]}>
            {prop?.tag || "Tag"}
          </Text>

          <View
            style={[
              components.dot,
              {marginHorizontal: 5, backgroundColor: Colors.accent},
            ]}
          />

          <Text style={[fonts.tag]}>{prop?.time || "4 mins ago"}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Medium;

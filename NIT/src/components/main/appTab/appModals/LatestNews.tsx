import { View, Text, ScrollView, ViewStyle } from 'react-native';
import React from 'react';
import { components, fonts } from '../../../customs/Styles';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Link from '../../../customs/buttons/Link';
import Medium from '../../../customs/cards/Medium';
import { New3, timeAgo } from '../Screens/data';

type Card = {
  title?: string;
  image?: any;
  tag?: string;
  time?: string;
  onPress?: () => void;

};

type Props = {
  style?: ViewStyle | ViewStyle[];
  dataNews?: New3[];
  onItemPress?: (item: New3) => void;
}

const LatestNews = (props: Props) => {
  const list: Card[] = [
    {
      title: 'The Florida Governor debate hits the fan',
      image: require('../../../../assets/images/contents/CNNnews.jpeg'),
      tag: 'Politics',
      time: '4 mins ago',
    },
    {
      title: 'The Florida Governor debate hits the fan',
      image: require('../../../../assets/images/contents/CNNnews.jpeg'),
      tag: 'Politics',
      time: '4 mins ago',
    },
    {
      title: 'The Florida Governor debate hits the fan',
      image: require('../../../../assets/images/contents/CNNnews.jpeg'),
      tag: 'Politics',
      time: '4 mins ago',
    },
    {
      title: 'The Florida Governor debate hits the fan',
      image: require('../../../../assets/images/contents/CNNnews.jpeg'),
      tag: 'Politics',
      time: '4 mins ago',
    },
  ];
  return (
    <View style={[props?.style]}>
      <View
        style={[
          components.rowSpaceBetween,
          { alignItems: 'center', marginBottom: 30 },
        ]}>
        <Text style={[fonts.title, { color: Colors.black }]}>Latest News</Text>
        <Link title="See all" />
      </View>

      <ScrollView style={{ marginHorizontal: 15 }} horizontal showsHorizontalScrollIndicator={false}>
        {props.dataNews?.map((item, index) => (
          <Medium
            key={index}
            time={item.publishDate ? timeAgo(item.publishDate) : "4 mins ago"}
            title={item.title}
            tag={item.category}
            image={item.cover}
            onPress={() => {props.onItemPress && props.onItemPress(item)}}

            style={{ marginRight: 10 }}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default LatestNews;

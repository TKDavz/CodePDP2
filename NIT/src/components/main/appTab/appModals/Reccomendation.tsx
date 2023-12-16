import { View, Text, FlatList, Modal } from 'react-native';
import React from 'react';
import { Colors, components, fonts } from '../../../customs/Styles';
import Link from '../../../customs/buttons/Link';
import Small from '../../../customs/cards/Small';
import { New3, newsData, timeAgo } from '../Screens/data_1';
import { NewsContext } from '../NewsContext';
import ReadNew from './ReadNew';

type Card = {
  title?: string;
  image?: any;
  tag?: string;
  time?: string;
  onPress?: () => void;
};
type Props = {
  onItemPress?: (item: New3) => void;
};

const Reccomendation = (props: Props) => {

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

  // lấy 4 phần tử random từ newsData
  const dataNews: New3[] = newsData.sort(() => Math.random() - Math.random()).slice(0, 4);

  const newsDataTemp: New3[] = newsData;
  const { listNews, setListNewsData } = React.useContext(NewsContext);
  const [newsSelected, setNewsSelected] = React.useState(newsDataTemp[0]);
  const [visible, setVisible] = React.useState(false);

  return (
    <View>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => { setVisible(false) }}
      >
        <ReadNew
          title={newsSelected?.title}
          content={newsSelected?.content}
          tag={newsSelected?.category}
          cover={newsSelected?.cover}
          commentCount={newsSelected?.commentCount}
          viewCount={newsSelected?.viewCount}
          likeCount={newsSelected?.likeCount}
          like={true}
          onBack={() => { setVisible(false) }}
          onItemReccomendPress={(item) => { setNewsSelected(item) }}
        />
      </Modal>

      <View style={[components.rowSpaceBetween, { alignItems: 'center', marginBottom: 30 }]}>
        <Text style={[fonts.title, { color: Colors.black }]}>Reccomendation</Text>
        <Link title="See all" />
      </View>

      <View style={{ marginHorizontal: 15 }}>
        {dataNews.map((item, index) => (
          <Small
            key={index}
            time={item.publishDate ? timeAgo(item.publishDate) : "4 mins ago"}
            title={item.title}
            tag={item.category}
            image={item.cover}
            // onPress={item.onPress}
            style={{ marginBottom: 10 }}
            onPress={() => {props.onItemPress && props.onItemPress(item) }}
          />
        ))}
      </View>
    </View>
  );
};

export default Reccomendation;

import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Modal,
} from 'react-native';
import React, { useState } from 'react';
import { Colors, components, fonts, styles } from '../../../customs/Styles';
import HeaderBar from '../../../customs/bars/HeaderBar';
import Big from '../../../customs/cards/Big';
import Input from '../../../customs/forms/Input';
import Username from '../../../customs/forms/Username';
import { getAllNews } from '../NewsService';
import { NewsContext } from '../NewsContext';
import { New3, newsData } from './data_1';
import ReadNew from '../appModals/ReadNew';
import { UserContext } from '../../userStack/UserContext';

type News = {
  title?: string;
  description?: string;
  tag?: string;
  cover?: any;
  commentCount?: number;
  viewCount?: number;
  like?: boolean;
};

type Props = {
  news?: News[];
};

const Home = (prop: Props) => {
  const tag: String[] = [
    'Công nghệ - Kỹ thuật',
    'Lập trình',
    'Phần mềm',
    'Mạng máy tính',
    'An ninh mạng',
    'Trí tuệ nhân tạo',
    'Đám Mây',
    'Hệ điều hành',
    'Thiết bị di động',
    'Website',
    // Thêm các tag khác tùy ý
  ];

  const news: News[] = prop.news || [
    {
      title: 'The Florida Governor debate hits the fan',
      description: 'This is the description',
      tag: 'Công nghệ - Kỹ thuật',
      cover: require('../../../../assets/images/contents/CNNnews.jpeg'),
      commentCount: 100,
      viewCount: 1000,
      like: true,
    },
    {
      title: 'The Florida Governor debate hits the fan',
      description: 'This is the description',
      tag: 'Công nghệ - Kỹ thuật',
      cover: require('../../../../assets/images/contents/CNNnews.jpeg'),
      commentCount: 100,
      viewCount: 1000,
      like: true,
    },
    {
      title: 'The Florida Governor debate hits the fan',
      description: 'This is the description',
      tag: 'Công nghệ - Kỹ thuật',
      cover: require('../../../../assets/images/contents/CNNnews.jpeg'),
      commentCount: 100,
      viewCount: 1000,
      like: true,
    },
    {
      title: 'The Florida Governor debate hits the fan',
      description: 'This is the description',
      tag: 'Công nghệ - Kỹ thuật',
      cover: require('../../../../assets/images/contents/CNNnews.jpeg'),
      commentCount: 100,
      viewCount: 1000,
      like: true,
    },
    {
      title: 'The Florida Governor debate hits the fan',
      description: 'This is the description',
      tag: 'Công nghệ - Kỹ thuật',
      cover: require('../../../../assets/images/contents/CNNnews.jpeg'),
      commentCount: 100,
      viewCount: 1000,
      like: true,
    },
    {
      title: 'The Florida Governor debate hits the fan',
      description: 'This is the description',
      tag: 'Công nghệ - Kỹ thuật',
      cover: require('../../../../assets/images/contents/CNNnews.jpeg'),
      commentCount: 100,
      viewCount: 1000,
      like: true,
    }
  ];
  const {addLikedNews, removeLikedNews, isLikedNews} = React.useContext(UserContext);


  
  const [newsDataTemp, setNewsDataTemp] = React.useState<New3[]>(newsData);
  const { listNews, setListNewsData } = React.useContext(NewsContext);
  const [newsSelected, setNewsSelected] = React.useState(newsDataTemp[0]);
  const [visible, setVisible] = React.useState(false);

  const [selected, setSelected] = useState(tag[0]);

  React.useEffect(() => {
    getNewsData();
  }, [])

  const [newsApi, setNewsApi] = React.useState<News[]>(news);
  const [loading, setLoading] = React.useState(false);

  const getNewsData = async () => {
    setLoading(true);
    const res = await setListNewsData();
    console.log('res: ', res as New3[]);
    // setNewsDataTemp(res as New3[]);

    // }
    setLoading(false);
  }


  return (
    <View style={[styles.container2]}>
      <Modal
        visible={visible}
        animationType="slide"
        onRequestClose={() => { setVisible(false) }}
      >
        <ReadNew
          title={newsSelected.title}
          content={newsSelected.content}
          tag={newsSelected.category}
          cover={newsSelected.cover}
          commentCount={newsSelected.commentCount}
          viewCount={newsSelected.viewCount}
          onBack={() => { setVisible(false) }}
          onItemReccomendPress={(item) => { setNewsSelected(item) }}
          url={newsSelected.url}
          newsID={newsSelected.id}
          author={newsSelected.author}
          publishDate={newsSelected.publishDate}
        />
      </Modal>
      <StatusBar backgroundColor={Colors.background} barStyle="dark-content" />

      <HeaderBar
        style={{
          marginVertical: 10,
        }}
      />

      <ScrollView
        style={[components.tag_Container]}
        horizontal={true}
        showsHorizontalScrollIndicator={false}>
        {tag.map((item, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.5}
            onPress={() => setSelected(item)}>
            <Text
              style={[
                selected == item ? fonts.link : fonts.tag,
                {
                  marginRight: 15,
                  color: selected == item ? Colors.black : undefined,
                  borderBottomColor: Colors.primary,
                  borderBottomWidth: selected == item ? 2 : 0,
                  paddingBottom: 5,
                }, {color: 'black'}
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <FlatList
        data={newsDataTemp}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 20,
            }} />
        )}
        renderItem={({ item }) => (
          <Big title={item.title}
            description={item.content}
            tag={item.category}
            cover={item.cover}
            commentCount={item.commentCount}
            viewCount={item.viewCount} 
            like={isLikedNews(item.id ? item.id : "")}
            onPress={() => {setNewsSelected(item), setVisible(true)}}/>
        )}
      >

      </FlatList>
    </View>
  );
};

export default Home;

import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  Modal,
} from 'react-native';
import React from 'react';
import { Colors, fonts, styles } from '../../../customs/Styles';
import Big from '../../../customs/cards/Big';
import { getAllNews } from '../NewsService';
import { NewsContext } from '../NewsContext';
import { newsData, New3 } from './data_1';
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


type Source = {
  image?: any;
  value?: string;
};

type Props = {
  news?: News[];
  source?: Source[];
};

const Activity = (prop: Props) => {
  const sources: Source[] = prop.source || [
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
    { image: require('../../../../assets/images/contents/CNN.jpg'), value: 'CNN' },
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
    },
  ];


  const {addLikedNews, removeLikedNews, isLikedNews} = React.useContext(UserContext);
  const { listNews, getListNews, setListNewsData } = React.useContext(NewsContext);

  const [newsDataTemp, setNewsDataTemp] = React.useState<New3[]>(newsData);
  const [newsSelected, setNewsSelected] = React.useState(newsDataTemp[0]);
  const [visible, setVisible] = React.useState(false);

  const getNewsData = async () => {
    setLoading(true);
    const res = await setListNewsData();
    console.log('res: ', res as New3[]);
    // setNewsDataTemp(res as New3[]);

    // }
    setLoading(false);
  }

  React.useEffect(() => {
    getNewsData();
    // setNewsDataTemp(listNews);

  }, []);

  const [newsApi, setNewsApi] = React.useState<News[]>(news);
  const [loading, setLoading] = React.useState(false);


  // getNewsData();

  return (
    <View style={[styles.container2]}>
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
          newsID={newsSelected.id}
          url={newsSelected.url}
          author={newsSelected.author}
          publishDate={newsSelected.publishDate}
          onBack={() => { setVisible(false) }}
          onItemReccomendPress={(item) => { setNewsSelected(item) }}
        />
      </Modal>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.background}
      />
      <Text style={[fonts.title, { color: Colors.black, marginVertical: 25 }]}>
        Followed
      </Text>

      <FlatList
        style={[{ height: 80 }]}
        data={sources}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              console.log(item.value);
            }}>
            <Image
              source={item.image}
              style={{
                width: 45,
                height: 45,
                borderRadius: 30,
                marginRight: 10,
              }}
            />
          </TouchableOpacity>
        )}
      />

      <Text style={[fonts.title, { color: Colors.black, marginVertical: 25 }]}>
        Followed's News
      </Text>

      <FlatList
        style={[{ marginTop: 30 }]}
        data={newsDataTemp}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        ItemSeparatorComponent={() => (
          <View
            style={{
              height: 20,
            }}
          />
        )}
        renderItem={({ item }) => <Big
          key={item.id}
          title={item.title}
          description={item.content}
          tag={item.category}
          cover={item.cover}
          commentCount={item.commentCount}
          viewCount={item.viewCount}
          like={isLikedNews(item.id ? item.id : "")}
          onPress={() => { setNewsSelected(item), setVisible(true) }}
        />}
      />
    </View>
  );
};

export default Activity;



// type News2 = {
//   id?: number;
//   title?: string;
//   content?: string;
//   publishDate?: Date;
//   author?: string;
//   category?: string;
//   url?: string;
//   active?: boolean;
//   cover?: string;
//   commentCount?: number;
//   viewCount?: number;
//   comment?: Comment[];
//   like?: Like[];
// };


// type Comment = {
//   id?: number;
//   content?: string;
//   createDate?: Date;
//   user?: User;
//   news?: News2;
// };


// type Like = {
//   id?: number;
//   user?: User;
//   news?: News2;
// };

// type Report = {
//   id?: number;
//   reason?: string;
//   confirm?: boolean;
//   createDate?: Date;
//   user?: User;
//   news?: News2;
// };

// type User = {
//   id?: number;
//   username?: string;
//   password?: string;
//   fullName?: string;
//   avatar?: string;
//   email?: string;
//   gender?: boolean;
//   resetCode?: string;
//   createDate?: Date;
//   liked?: /* mảng ID news*/[];
// };
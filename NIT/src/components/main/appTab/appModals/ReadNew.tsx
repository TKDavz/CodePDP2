import { View, Text, StatusBar, Image, ScrollView } from 'react-native';
import React from 'react';
import { styles, Colors, fonts, components } from '../../../customs/Styles';
import FunctionsBar from '../../../customs/bars/FunctionsBar';
import Linear from '../../../customs/buttons/Linear';
import Icon from '../../../customs/buttons/Icon';
import Float from '../../../customs/buttons/Float';
import Reccomendation from './Reccomendation';
import ArticleBar from '../../../customs/bars/ArticleBar';
import { like } from '../NewsService';
// import WebViewModal from './WebViewModal';
import Share from 'react-native-share';

import { New3 } from '../Screens/data';
import { Linking } from 'react-native';
import { timeAgo } from '../Screens/data_1';
import { UserContext } from '../../userStack/UserContext';



type Props = {
  title?: string;
  content?: string;
  tag?: string;
  cover?: any;
  commentCount?: number;
  viewCount?: number;
  likeCount?: number;
  like?: boolean;
  url?: string;
  newsID?:  number;

  author?: string;
  publishDate?: Date;

  onBack?: () => void;

  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;

  onItemReccomendPress?: (item: New3) => void;
};

const ReadNew = (props: Props) => {
  const {addLikedNews, removeLikedNews, isLikedNews} = React.useContext(UserContext);

  const [isModalVisible, setModalVisible] = React.useState(false);

  const openBrowser = (url: string) => {
    console.log(url);
    Linking.openURL(url).catch((err) => console.error('An error occurred', err));
  };


  const onShare = async () => {
    try {
      const shareOptions = {
        title: 'Share via',
        message: `Check out this news article: ${props.title}\n${props.url}`,
      };
      await Share.open(shareOptions);

    } catch (error) {
      console.error("Error sharing news article:", error);
    }
  };

  return (
    <View style={[styles.container1]}>
      <StatusBar barStyle="dark-content" backgroundColor={Colors.background} />

      <FunctionsBar onPress1={() => { props.onBack && props.onBack() }} />

      <ScrollView style={{ flex: 1 }}>
        <Image
          source={props.cover ? { uri: props.cover } : require('../../../../assets/images/contents/CNNnews.jpeg')}
          style={{ width: '100%', height: 200 }}
        />

        <View style={[styles.container2]}>
          <Text
            style={[fonts.title, { color: Colors.black, marginVertical: 15 }]}>
            {props.title}
          </Text>

          <View style={[components.rowSpaceBetween]}>
            <View style={[components.rowSpaceBetween, { minWidth: '30%' }]}>
              <Image
                source={require('../../../../assets/images/icons/author.png')}
                style={{
                  width: 45,
                  height: 45,
                  borderRadius: 30,
                  marginRight: 10,
                }}
              />

              <View>
                <Text style={[fonts.text, { color: Colors.black }]}>
                 {props.author ? props.author : "admin"}
                </Text>
                <Text style={[fonts.tag]}>{props.publishDate ? timeAgo(props.publishDate): ""}</Text>
              </View>
            </View>

            <Icon
              tint={Colors.black}
              style={{ borderWidth: 0 }}
              icon={require('../../../../assets/images/icons/follow_line.png')}
            />
          </View>

          <Text style={[fonts.text, { color: Colors.black, marginVertical: 20 }]}>
            {props.content}
          </Text>

          <ArticleBar likes={props.likeCount}
            comments={props.commentCount}
            like={isLikedNews(props.newsID ? props.newsID : "")}
            onComment={() => { }}
            onLike={() => {
              props.onLike && props.onLike();
              if (props.newsID) {
                if (isLikedNews(props.newsID)) {
                  removeLikedNews(props.newsID);
                } else {
                  addLikedNews(props.newsID);
                }
              }
            }}
            onShare={() => {onShare()}}
          />

          <Reccomendation onItemPress={(item) => { props.onItemReccomendPress && props.onItemReccomendPress(item) }} />
        </View>
      </ScrollView>

      {/* <Float
        style={{
          position: 'absolute',
          backgroundColor: Colors.white,
          borderColor: Colors.black,
          borderWidth: 1,
          bottom: 20,
          right: 20,
        }}
        icon={require('../../../../assets/images/icons/arrow_down_fill.png')}
        tint={Colors.black}
      /> */}
      <Float
        style={{
          position: 'absolute',
          backgroundColor: Colors.white,
          borderColor: Colors.black,
          borderWidth: 1,
          bottom: 20,
          right: 20,
        }}
        icon={require('../../../../assets/images/icons/open_web.png')}
        tint={Colors.black}
        onPress={() => {
          if (props.url) {
            openBrowser(props.url);
          }
        }}
      />
      {/* <WebViewModal
        url={props.url ? props.url : ''}
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
      /> */}
    </View>
  );
};

export default ReadNew;

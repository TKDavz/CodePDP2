import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {components, fonts} from '../Styles';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Prop = {
  commentCount?: number;
  viewCount?: number;
  likePress?: (like? : boolean) => void;
  commentPress?: () => void;
  sharePress?: () => void;
  like?: boolean;
};

const ActionBar = (props: Prop) => {

  // xử lý like
  const [like, setLike] = React.useState(props?.like || false);
  const onLikePress = () => {
    props?.likePress && props.likePress(like);
    setLike(!like);
  }


  return (
    <View
      style={[
        components.rowSpaceBetween,
        {
          alignItems: 'center',
          paddingLeft: 15,
          marginTop: 15,
        },
      ]}>

      {/* Like cmt share */}
      <View
        style={[
          components.rowSpaceBetween,
          {alignItems: 'center', width: '30%'},
        ]}>
        <TouchableOpacity onPress={() =>{onLikePress()}}>
          <Image
            source={
              like
                ? require('../../../assets/images/icons/heart_fill.png')
                : require('../../../assets/images/icons/heart_line.png')
            }
            style={{tintColor: Colors.primary}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props?.commentPress && props.commentPress()}>
          <Image
            source={require('../../../assets/images/icons/comment_line.png')}
            style={{tintColor: Colors.primary}}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => props?.sharePress && props.sharePress()}>
          <Image
            source={require('../../../assets/images/icons/share_line.png')}
            style={{tintColor: Colors.primary}}
          />
        </TouchableOpacity>
      </View>

      {/* News' cmt and view quantity*/}
      <View
        style={[
          components.rowSpaceEvently,
          {alignItems: 'center', width: '35%'},
        ]}>
        <Text style={[fonts.tag, {color: Colors.accent}]}>{props?.commentCount || "0"}</Text>

        <Image
          source={require('../../../assets/images/icons/fire_fill.png')}
          style={{width: 15, height: 15, tintColor: Colors.accent}}
        />

        <View style={[components.dot, {marginHorizontal: 5}]} />

        <Text style={[fonts.tag, {color: Colors.accent}]}>{props?.commentCount || "0"}</Text>

        <Image
          source={require('../../../assets/images/icons/eye_fill.png')}
          style={{width: 15, height: 15, tintColor: Colors.accent}}
        />
      </View>
    </View>
  );
};

export default ActionBar;

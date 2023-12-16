import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {components, fonts} from '../Styles';

type Props = {
    like?: boolean;
    likes?: string | number;
    comments?: string | number;
    onLike?: () => void;
    onComment?: () => void;
    onShare?: () => void;
}

const ArticleBar = (prop : Props) => {
  const [like, setLike] = React.useState<boolean>(prop.like || false);
  const [numberLike, setNumberLike] = React.useState<string | number>(prop.like ? prop.likes as number + 1 : prop.likes != undefined ? prop.likes : 0);
  const [numberComment, setNumberComment] = React.useState<string | number>(prop.comments || 0);


    // setNumberLike(like ? numberLike as number + 1 : numberLike);

  
  const onLikePress = () => {
    prop?.onLike && prop?.onLike?.();
    //ep numberLike ve number
    if (like) {
      setNumberLike((numberLike as number) - 1);
    } else {
      setNumberLike((numberLike as number) + 1);
    }

    setLike(!like);
  }

  return (
    <View
      style={[
        components.rowSpaceBetween,
        { paddingVertical: 5},
      ]}>
        
      <TouchableOpacity onPress={()=>{
        onLikePress();
      }} style={[components.rowAlign, {alignItems: 'center'}]}>
        <Image
          source={like ? require('../../../assets/images/icons/heart_fill.png') : require('../../../assets/images/icons/heart_line.png')}
          style={{width: 30, height: 30, marginRight: 5}}
        />
        <Text style={[fonts.link, {color: 'black'}]}>{numberLike} likes</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        prop?.onComment && prop?.onComment()
      }} style={[components.rowAlign, {alignItems: 'center'}]}>
        <Image
          source={require('../../../assets/images/icons/comment_line.png')}
          style={{width: 30, height: 30, marginRight: 5}}
        />
        <Text style={[fonts.link, {color: 'black'}]}>{numberComment} comments</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={()=>{
        prop?.onShare && prop?.onShare()
      }} style={[components.rowAlign, {alignItems: 'center'}]}>
        <Image
          source={require('../../../assets/images/icons/share_line.png')}
          style={{width: 30, height: 30, marginRight: 5}}
        />
        <Text style={[fonts.link, {color: 'black'}]}>Share</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ArticleBar;

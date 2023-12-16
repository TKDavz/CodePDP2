import {
  View,
  Text,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  ColorValue,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {Colors, components, fonts} from '../Styles';
import ActionBar from '../bars/ActionBar';

type Props = {
  title?: string;
  description?: string;
  tag?: string;
  cover?: any;
  style? : ViewStyle | ViewStyle[];
  onPress?: () => void;
  commentCount?: number;
  viewCount?: number;
  like?: boolean;
};

const Big = (props: Props) => {
  const title = 'The Florida Governor debate hits the fan';
  const description =
    'ST. PETERSBURG, Fla. — The Florida governor’s race was spinning ' +
    'wildly on Thursday, almost as fast as that electric fan former Gov. Charlie Crist ' +
    'insists on bringing along to campaign appearances.';

  return (
    <TouchableOpacity
      style={[components.cardBig_Container, props?.style]}
      onPress={
        () => {
          props?.onPress && props?.onPress();
        }
      }>
      <View>
        {/* cover */}
        <Image
          source={
            props?.cover ? {uri: props?.cover} : 
            require('../../../assets/images/contents/CNNnews.jpeg')
          }
          style={{
            width: '100%',
            height: 200,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
          }}
        />

        {/* title */}
        <View
          style={[
            components.rowSpaceBetween,
            {
              marginVertical: 5,
            },
          ]}>
          <Text
            style={[
              fonts.title,
              {
                width: '70%',
                paddingLeft: 10,
              }, {color: 'black'}
            ]}>
            {props?.title || title}
          </Text>

          {/* Tag */}
          <View
            style={[
              components.rowSpaceBetween,
              {justifyContent: 'flex-start', width: 80, marginRight: 20}
            ]}>
            <Image
              source={require('../../../assets/images/icons/tag.png')}
              style={{width: 15, height: 15, tintColor: Colors.accent}}
            />

            <Text style={[fonts.tag, {color: Colors.accent, paddingLeft: 5}]}>
              {props?.tag || 'Tag'}
            </Text>
          </View>
        </View>

        {/* description */}
        <Text
          numberOfLines={2}
          style={[
            {
              width: '90%',
              paddingLeft: 15,
              paddingRight: 5,
            }, {color: 'black'}
          ]}>
          {props?.description || description}
        </Text>

        {/* action bar */}
        <ActionBar
          commentCount={props?.commentCount}
          viewCount={props.viewCount}
          likePress={(like? : boolean) => {props?.onPress && props.onPress(); props.like = !like}}
          commentPress={() => props?.onPress && props.onPress()}
          sharePress={() => props?.onPress && props.onPress()}
          like={props?.like}
        />
      </View>
    </TouchableOpacity>
  );
};

export default Big;

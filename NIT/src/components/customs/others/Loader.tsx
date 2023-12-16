import {View, Text, Modal} from 'react-native';
import React from 'react';
import {Colors, fonts, styles} from '../Styles';
import LottieView from 'lottie-react-native';

type Props = {
  visible?: boolean;
}

const Loader = (prop : Props) => {
  return (
      <Modal animationType="fade" visible={prop?.visible || true} transparent >
        <View
          style={[
            styles.container1,
            {
              justifyContent: 'center',
              alignItems: 'center',
            },
          ]}>
          <LottieView
            source={require('../../../assets/lotties/NIT_Loading.json')}
            autoPlay
            loop
            style={[{width: '100%', height: 400}]}
          />
          <Text style={[fonts.header, {color: Colors.primary}]}>
            Loading...
          </Text>
        </View>
      </Modal>
  );
};

export default Loader;

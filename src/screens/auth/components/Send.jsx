import {Platform, StyleSheet, View} from 'react-native';
import React from 'react';
import getSize from '../../../utils/helpers';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../../styles/Colors.jsx';
import getRFSize from '../../../utils/Helper';

const Send = ({icon, ...props}) => {
  const outerShadow = Platform.select({
    ios: {
      shadowColor: '#4437F2',
      shadowOffset: {width: 0, height: 4},
      shadowOpacity: 0.17,
      shadowRadius: 50,
    },
    android: {
      elevation: 10,
    },
  });
  return (
    // <View style={styles.OuterContainer}>
    //  <View style={styles.middleContainer}>
    <LinearGradient
      colors={[Colors.white, Colors.white]}
      start={{x: 0, y: 0}}
      end={{x: 0, y: 1}}
      style={styles.innerContainer}>
      {icon}
    </LinearGradient>
    // </View>
    // </View>
  );
};

export default Send;

const styles = StyleSheet.create({
  OuterContainer: {
    height: getSize(223),
    width: getSize(223),
    borderRadius: getSize(223),
    backgroundColor: 'rgba(255, 255, 255, 0.10)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  middleContainer: {
    height: getSize(193),
    width: getSize(193),
    borderRadius: getSize(193),
    backgroundColor: 'rgba(255, 255, 255, 0.53)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerContainer: {
    height: getRFSize(184),
    width: getRFSize(184),
    borderRadius: getSize(164),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import React from 'react';
import Lottie from 'lottie-react-native';
import { StyleSheet, SafeAreaView } from 'react-native';

import animation from './loading.json';

export default function Loading() {
  return (
    <SafeAreaView style={styles.viewAnimation}>
      <Lottie source={animation} autoPlay loop style={styles.animationLottie} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  viewAnimation: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  animationLottie: {
    width: 200,
  },
});

import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import { colors } from '../common/colors';

function MainLayout({children, style = {}}) {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={[styles.content]}>{children}</View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor:colors.gray
  },
  content: {
    flex: 1,
  },
});

export default MainLayout;

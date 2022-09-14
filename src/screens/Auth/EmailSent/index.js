import {Pressable, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import {colors} from '../../../common/colors';
import {AppText} from '../../../components';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import { hp } from '../../../../utils/dimensions';

export default function EmailSent() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* <StatusBar animated={true} backgroundColor={colors.primary} /> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          width: '100%',
          marginTop: '10%',
        }}>
        <LottieView
          autoPlay
          loop
          source={require('../../../assets/lottie-animations/email-sent.json')}
        />
      </View>
      <AppText
      style={{
        width: '80%',
        alignSelf: 'center',
        fontSize: RFValue(20),
        fontWeight:'700',
        color: colors.black,
      }}
      >Email Sent !</AppText>
      <AppText
        style={{
          width: '80%',
          alignSelf: 'center',
          fontSize: RFValue(13),
          color: colors.black,
          marginTop:hp(10)
        }}>
        Check your inbox for instructions from us on how to reset your password.
      </AppText>
      <View style={styles.footerContainer}>
        <Pressable
          style={styles.footerButton}
          delayPressIn={0}
          onPress={() => navigation.navigate('Login')}>
          <AppText style={styles.footerButtonText}>Login</AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray,
    // alignItems: 'center',
  },
  footerContainer: {
    // position: 'absolute',
    // bottom: hp(80),
    marginTop:hp(30),
    width: '80%',
    alignSelf: 'center',
  },
  footerButton: {
    width: '100%',
    backgroundColor: colors.secondary,
    height: hp(44),
    borderRadius: hp(7),
    justifyContent: 'center',
  },
  footerButtonText: {
    textAlign: 'center',
    color: colors.white,
    fontWeight:'500',
    fontFamily: 'GoogleSans-Medium',
    fontSize: RFValue(14),
  },
});

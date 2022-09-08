import {
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../../../../utils/dimensions';
import LottieView from 'lottie-react-native';
import {colors} from '../../../common/colors';
import AppText from '../../../components/AppText';
import {useNavigation} from '@react-navigation/native';

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor={colors.violet} />
      <AppText style={styles.headerText}>Let's Get Started</AppText>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '50%',
          width: '100%',
        }}>
        <LottieView
          autoPlay
          loop
          source={require('../../../assets/lottie-animations/login-ui.json')}
        />
      </View>
      <View style={styles.footerContainer}>
        <Pressable
          style={styles.footerButton}
          delayPressIn={0}
          onPress={() => navigation.navigate('Register')}>
          <AppText style={styles.footerButtonText}>Sign Up</AppText>
        </Pressable>
        <Pressable
          delayPressIn={0}
          onPress={() => navigation.navigate('Login')}
          style={[styles.footerLink]}>
          <AppText style={styles.footerLink}>
            Already have an account?{' '}
            <AppText style={[styles.footerLink, {color: colors.yellow}]}>
              Sign In
            </AppText>
          </AppText>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.violet,
    alignItems: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: RFValue(30),
    marginTop: hp(100),
    fontWeight: '700',
    color: 'white',
    fontFamily: 'GoogleSans-Regular',
  },
  footerContainer: {
    position: 'absolute',
    bottom: hp(80),
    width: '85%',
    alignSelf: 'center',
  },
  footerButton: {
    width: '100%',
    backgroundColor: colors.yellow,
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
  footerLink: {
    marginTop: hp(10),
    fontSize: RFValue(12),
    color: colors.white,
    textAlign: 'center',
    fontFamily: 'GoogleSans-Regular',
  },
});

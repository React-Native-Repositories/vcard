import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../../../../utils/dimensions';
import LottieView from 'lottie-react-native';
import {colors} from '../../../common/colors';
import * as Yup from 'yup';
import {
  AppForm,
  AppFormField,
  AppText,
  ErrorMessage,
  SubmitButton,
  // ErrorMessage,
  // SubmitButton,
} from '../../../components';
import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  Easing,
  FadeIn,
  FadeInDown,
  FadeOut,
  Layout,
} from 'react-native-reanimated';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().min(1).label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function Login() {
  const navigation = useNavigation();
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [showPassword, setShowPassword] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  /* -------------------------------------------------------------------------- */
  /*                                   API Section                              */
  /* -------------------------------------------------------------------------- */

  const handleSubmit = async ({email, password}) => {
    navigation.navigate(`/Main`)
    setLoginFailed(false);
    setErrorMessage(null);
    // let user_type = 'VENDOR';
    // const response = await adminLogin({email, password, user_type});
    // if (response) {
    //   setLoginFailed(false);
    //   await setToken(
    //     'access_token',
    //     getValue(response, `data.data.accessToken`, ''),
    //   );
    //   await setToken(
    //     'refresh_token',
    //     getValue(response, `data.data.refreshToken`, ''),
    //   );
    //   await setToken(
    //     'user',
    //     JSON.stringify(getValue(response, `data.data.user`, '')),
    //   );
    //   navigation.navigate('Main');
    //   Toast.show({
    //     type: 'success',
    //     text1: 'Success',
    //     text2: 'Logged in successfully',
    //   });
    // }
    setLoginFailed(true);
    // setErrorMessage('Invalid email and/or password.');
  };
  return (
    <View style={styles.container}>
      {/* <StatusBar animated={true} backgroundColor={colors.primary} /> */}
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: '37%',
          width: '100%',
          marginTop: '10%',
        }}>
        <LottieView
          autoPlay
          loop
          source={require('../../../assets/lottie-animations/person.json')}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          height: '55%',
          width: '100%',
          borderTopRightRadius: hp(30),
          borderTopLeftRadius: hp(30),
          alignItems: 'center',
        }}>
        <View style={{width: '90%', marginTop: '5%'}}>
          <Animated.View
            entering={FadeInDown}
            layout={Layout.easing(Easing.bounce).delay(1 * 100)}
            exiting={FadeOut.duration(150)}>
                   <ScrollView
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}>
            <AppForm
              initialValues={{
                email: '',
                password: '',
              }}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}>
              <AppFormField
                name="email"
                autoComplete={'email'}
                autoCapitalize="none"
                autoCorrect={false}
                icon="mail"
                placeholder="Enter Email"
                label="Email"
                keyboardType="email-address"
                backgroundColor="#f7f6f7"
                borderColor="#f7f6f7"
                height={hp(50)}
                borderRadius={10}
                fontSize={RFValue(12)}
              />
              <AppFormField
                name="password"
                label="Password"
                autoComplete={'password'}
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock-closed"
                innerIcon={showPassword ? 'eye-off' : 'eye'}
                placeholder="Enter Your Password"
                textContentType="password"
                secureTextEntry={!showPassword}
                handleInnerIconClicked={() => setShowPassword(!showPassword)}
                submitOnEnter={true}
                backgroundColor="#f7f6f7"
                borderColor="#f7f6f7"
                height={hp(50)}
                borderRadius={10}
                fontSize={RFValue(12)}
              />
              <ErrorMessage error={errorMessage} visible={loginFailed} />
              <SubmitButton title="Sign In" style={styles.submit} />
            </AppForm>
            <View style={styles.footerContainer}>
              <View style={styles.footerLink}>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => navigation.navigate('Register')}>
                  <AppText style={{color: colors.black,fontSize: RFValue(12),}}>
                    New User?{' '}
                    <AppText style={{color: colors.secondary,fontSize: RFValue(12),}}>Sign Up</AppText>
                  </AppText>
                </TouchableOpacity>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => navigation.navigate('Main')}>
                  <AppText style={{color: colors.secondary,fontSize: RFValue(12),}}>
                    Home
                  </AppText>
                </TouchableOpacity>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => navigation.navigate('ForgotPassword')}>
                  <AppText style={{color: colors.secondary,fontSize: RFValue(12),}}>
                    Forgot Password?
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>
            </ScrollView>
          </Animated.View>
        </View>
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
  headerText: {
    alignSelf: 'center',
    fontSize: RFValue(30),
    marginTop: hp(110),
    fontWeight: '700',
    color: 'white',
    fontFamily: 'GoogleSans-Regular',
  },
  submit: {
    marginTop: hp(24),
    height: hp(50),
    backgroundColor: colors.secondary,
    fontSize: RFValue(14),
    fontFamily: 'GoogleSans-Medium',
    borderRadius: 10,
  },
  footerContainer: {
    width: '100%',
    alignSelf: 'center',
  },
  footerLink: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hp(15),
    fontSize: RFValue(12),
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'GoogleSans-Regular',
    marginBottom:hp(30)
  },
});

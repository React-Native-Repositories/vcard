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
} from '../../../components';
// import Toast from 'react-native-toast-message';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  Easing,
  FadeInDown,
  FadeOut,
  Layout,
} from 'react-native-reanimated';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().min(1).label('Email'),
  password: Yup.string().required().min(4).label('Password'),
  full_name: Yup.string().required().min(4).label('Name'),
  phone: Yup.string().required().min(10).max(10).label('Phone'),
});

export default function Register() {
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

  const handleSubmit = async ({email, password, full_name, phone}) => {
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
      <StatusBar animated={true} backgroundColor={colors.violet} />
      {/* <View
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
          source={require('../../../assets/lottie-animations/register-ui.json')}
        />
      </View> */}
      <AppText style={styles.headerText}>Register</AppText>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          backgroundColor: 'white',
          height: '80%',
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
                  full_name: '',
                  phone: '',
                }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}>
                <AppFormField
                  name="full_name"
                  // autoComplete={'full_name'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="person"
                  placeholder="Enter Full Name"
                  label="Name"
                  backgroundColor="#f7f6f7"
                  borderColor="#f7f6f7"
                  height={hp(50)}
                  borderRadius={10}
                  fontSize={RFValue(12)}
                />
                <AppFormField
                  name="phone"
                  // autoComplete={'phone'}
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="call"
                  placeholder="Enter Phone Number"
                  label="Phone"
                  keyboardType="phone-pad"
                  backgroundColor="#f7f6f7"
                  borderColor="#f7f6f7"
                  height={hp(50)}
                  borderRadius={10}
                  fontSize={RFValue(12)}
                />
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
                <SubmitButton title="Sign Up" style={styles.submit} />
              </AppForm>
              <View style={styles.footerContainer}>
                <TouchableOpacity
                  delayPressIn={0}
                  onPress={() => navigation.navigate('Login')}
                  style={[styles.footerLink]}>
                  <AppText style={styles.footerLink}>
                    Already have an account?{' '}
                    <AppText
                      style={[styles.footerLink, {color: colors.yellow}]}>
                      Sign In
                    </AppText>
                  </AppText>
                </TouchableOpacity>
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
    backgroundColor: colors.violet,
    // alignItems: 'center',
  },
  headerText: {
    alignSelf: 'center',
    fontSize: RFValue(30),
    marginTop: hp(40),
    fontWeight: '700',
    color: 'white',
    fontFamily: 'GoogleSans-Regular',
  },
  submit: {
    marginTop: hp(24),
    height: hp(50),
    backgroundColor: colors.yellow,
    fontSize: RFValue(14),
    fontFamily: 'GoogleSans-Medium',
    borderRadius: 10,
  },
  footerContainer: {
    alignSelf: 'center',
  },
  footerLink: {
    marginTop: hp(10),
    fontSize: RFValue(12),
    color: colors.black,
    textAlign: 'center',
    fontFamily: 'GoogleSans-Regular',
    marginBottom: hp(30),
  },
});

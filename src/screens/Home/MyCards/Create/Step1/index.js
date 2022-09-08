import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import CreateThemeScreen from './Themes';
import MainLayout from '../../../../../Layout/MainLayout';
import AppHeader from '../../../../../components/common/AppHeader';
import {AppText} from '../../../../../components';
import {hp} from '../../../../../../utils/dimensions';
import {colors} from '../../../../../common/colors';
import {RFValue} from '../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import CreateCardBusinessInfo from './BusinessInfo';
import CreateCardSocialMedia from './SocialMedia';

export default function CreateCardStepOne() {
  return (
    <MainLayout>
      <AppHeader
        headerName={'Create Card'}
        hideProfile={true}
        naviagateBack={'MyCards'}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.stepone}>
            <View style={styles.stepText}>
              <AppText style={styles.text}>1</AppText>
            </View>
          </View>

          <CreateThemeScreen />

          <View style={styles.stepone}>
            <View style={styles.stepText}>
              <AppText style={styles.text}>2</AppText>
            </View>
          </View>

          <CreateCardBusinessInfo />

          <View style={styles.stepone}>
            <View style={styles.stepText}>
              <AppText style={styles.text}>3</AppText>
            </View>
          </View>

          <CreateCardSocialMedia />

          <View style={{alignItems: 'center'}}>
            <TouchableOpacity style={styles.button}>
              <AppText style={styles.buttonText}>Create Card</AppText>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(70),
  },
  stepone: {
    height: hp(50),
    width: hp(50),
    borderRadius: hp(25),
    backgroundColor: colors.white,
    alignSelf: 'center',
    justifyContent: 'center',
    marginTop: hp(10),
  },
  stepText: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: RFValue(14),
    fontWeight: '500',
  },
  button: {
    width: '90%',
    marginTop: hp(20),
    backgroundColor: colors.yellow,
    padding: hp(13),
    borderRadius: hp(5),
    marginBottom: hp(30),
  },
  buttonText: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: RFValue(16),
    fontWeight: '500',
  },
});

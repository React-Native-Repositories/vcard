import {
  Pressable,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import React from 'react';
import MainLayout from '../../../Layout/MainLayout';
import AppHeader from '../../../components/common/AppHeader';
import {AppIcon, AppText} from '../../../components';
import {colors} from '../../../common/colors';
import {hp} from '../../../../utils/dimensions';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import PrivacySvgComponent from '../../../assets/svg/privacy';
import TermsSvgComponent from '../../../assets/svg/terms';

export default function MoreScreen() {
  return (
    <MainLayout style={{backgroundColor: colors.white}}>
      <AppHeader headerName="More" />
      <ScrollView style={styles.scroll}>
        <View style={styles.main}>
          <Pressable style={styles.container}>
            <View style={styles.row}>
              <AppIcon name={'key'} size={hp(25)} color={colors.tabMenuActive} />
              <View style={styles.rowView}>
                <AppText style={styles.text}>Account</AppText>
                <AppText style={styles.description}>Profile, Security</AppText>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.container}>
            <View style={styles.row}>
              <AppIcon
                name={'person-circle'}
                size={hp(25)}
                color={colors.tabMenuActive}
              />
              <View style={styles.rowView}>
                <AppText style={styles.text}>About Us</AppText>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.container}>
            <View style={styles.row}>
              <PrivacySvgComponent />
              <View style={styles.rowView}>
                <AppText style={styles.text}>Privacy Policy</AppText>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.container}>
            <View style={styles.row}>
              <TermsSvgComponent />
              <View style={styles.rowView}>
                <AppText style={styles.text}>Terms and Conditions</AppText>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.container}>
            <View style={styles.row}>
              <AppIcon
                name={'information-circle'}
                size={hp(25)}
                color={colors.tabMenuActive}
              />
              <View style={styles.rowView}>
                <AppText style={styles.text}>Help</AppText>
                <AppText style={styles.description}>
                  Help Center, Contact us
                </AppText>
              </View>
            </View>
          </Pressable>
          <Pressable style={styles.container}>
            <View style={styles.row}>
              <AppIcon
                name={'person-add'}
                size={hp(24)}
                color={colors.tabMenuActive}
              />
              <View style={styles.rowView}>
                <AppText style={styles.text}>Invite a friend</AppText>
              </View>
            </View>
          </Pressable>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  scroll: {},
  main: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(20),
  },
  container: {
    borderBottomColor: colors.gray,
    borderWidth: 1,
    borderColor: colors.white,
    height: hp(60),
    justifyContent: 'center',
  },
  text: {
    fontSize: RFValue(13),
    color:colors.black
  },
  description: {
    fontSize: RFValue(11),
    color: colors.subtextColor,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowView: {
    marginLeft: hp(10),
  },
});

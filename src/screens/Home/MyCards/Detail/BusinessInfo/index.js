import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../../../components/common/AppHeader';
import MainLayout from '../../../../../Layout/MainLayout';
import AppTextInput from '../../../../../components/AppTextInput';
import {getValue} from '../../../../../../utils/lodash';
import {colors} from '../../../../../common/colors';
import {hp, wp} from '../../../../../../utils/dimensions';
import {RFValue} from '../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import AppButton from '../../../../../components/AppButton';
import AppText from '../../../../../components/AppText';
import {ScrollView} from 'native-base';
import {AppIcon} from '../../../../../components';

export default function BusinessInfo() {
  /* -------------------------------------------------------------------------- */
  /*                               Usestate Section                             */
  /* -------------------------------------------------------------------------- */
  const [request, setRequest] = useState({
    business_logo: '',
    business_name: '',
    business_description: '',
    website_link: '',
    office_timings: '',
    address: '',
    color_code:'',
  });
  /* -------------------------------------------------------------------------- */
  /*                               On change Section                            */
  /* -------------------------------------------------------------------------- */
  const onChange = (name, value) => {
    setRequest({
      ...request,
      [name]: value,
    });
  };
  return (
    <MainLayout style={{backgroundColor: colors.gray}}>
      <AppHeader
        headerName={'Business Info'}
        hideProfile={true}
        naviagateBack={'MyCardDetail'}
      />
      <ScrollView
        style={styles.maincontainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.logoContainer}></View>
  
          <View style={styles.header}>
            <AppTextInput
              label={'Business Name'}
              placeholder={'Enter Business Name'}
              name="business_name"
              value={getValue(request, `business_name`, '')}
              onChangeText={e => onChange('business_name', e)}
              backgroundColor={colors.white}
              lpColor={'#A5A5A5'}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          <View style={styles.header}>
            <AppTextInput
              label={'Business Description'}
              placeholder={'Enter Business Description'}
              name="business_description"
              value={getValue(request, `business_description`, '')}
              onChangeText={e => onChange('business_description', e)}
              backgroundColor={colors.white}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          <View style={styles.header}>
            <AppTextInput
              label={'Website Link'}
              placeholder={'Enter Website Link'}
              name="website_link"
              value={getValue(request, `website_link`, '')}
              onChangeText={e => onChange('website_link', e)}
              backgroundColor={colors.white}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          <View style={styles.header}>
            <AppTextInput
              label={'Office Timings'}
              placeholder={'Enter Office Timings'}
              name="office_timings"
              value={getValue(request, `office_timings`, '')}
              onChangeText={e => onChange('office_timings', e)}
              backgroundColor={colors.white}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          <View style={styles.header}>
            <AppTextInput
              label={'Address'}
              placeholder={'Enter Address'}
              name="address"
              value={getValue(request, `address`, '')}
              onChangeText={e => onChange('address', e)}
              backgroundColor={colors.white}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          <View>
           <View style={styles.header}>
            <AppTextInput
              label={'Theme Color'}
              autoCapitalize='none'
              placeholder={'Enter Theme Color'}
              name="color_code"
              value={getValue(request, `color_code`, '')}
              onChangeText={e => onChange('color_code', e)}
              backgroundColor={request.color_code?request.color_code:colors.white}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          </View>
          <TouchableOpacity style={styles.button}>
            <AppText style={styles.buttonText}>Submit</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    width: '90%',
    alignSelf: 'center',
  },
  container: {},
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    // width:'90%',
    marginTop: hp(20),
    backgroundColor: colors.secondary,
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
  logoContainer: {
    alignSelf: 'center',
    marginTop: hp(15),
    height: hp(100),
    width: hp(100),
    borderRadius: hp(50),
    backgroundColor: colors.secondary,
  },
  picker:{
    height:hp(200)
  }
});

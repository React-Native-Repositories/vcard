import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import AppTextInput from '../../../../../../components/AppTextInput';
import {getValue} from '../../../../../../../utils/lodash';
import {colors} from '../../../../../../common/colors';
import {hp} from '../../../../../../../utils/dimensions';
import {RFValue} from '../../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import AppText from '../../../../../../components/AppText';
import { AppTextArea } from '../../../../../../components';

export default function CreateCardBusinessInfo() {
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
    color_code: '',
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
    <View style={styles.maincontainer}>
      <View style={styles.logoContainer}></View>
      <View style={styles.header}>
        <AppTextInput
          label={'Business Name *'}
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
          label={'Business Description *'}
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
        <AppTextArea
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
          rows={5}
        />
      </View>
      <View>
        <View style={styles.header}>
          <AppTextInput
            label={'Theme Color *'}
            autoCapitalize="none"
            placeholder={'Enter Theme Color'}
            name="color_code"
            value={getValue(request, `color_code`, '')}
            onChangeText={e => onChange('color_code', e)}
            backgroundColor={
              request.color_code ? request.color_code : colors.white
            }
            height={hp(50)}
            borderRadius={hp(5)}
            fontSize={RFValue(12)}
            borderColor={colors.textInputBorder}
            style={styles.text}
          />
        </View>
      </View>

    </View>
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

  logoContainer: {
    alignSelf: 'center',
    marginTop: hp(12),
    height: hp(120),
    width: hp(120),
    borderRadius: hp(10),
    backgroundColor: colors.yellow,
  },
  picker: {
    height: hp(200),
  },
});

import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MainLayout from '../../../../../Layout/MainLayout'
import AppHeader from '../../../../../components/common/AppHeader'
import { AppTextInput, AppText } from '../../../../../components'
import { getValue } from '../../../../../../utils/lodash'
import { colors } from '../../../../../common/colors'
import { hp } from '../../../../../../utils/dimensions'
import { RFValue } from '../../../../../../utils/npm-helper/react-native-responsive-fontsize'

export default function Locations() {
   /* -------------------------------------------------------------------------- */
  /*                               Usestate Section                             */
  /* -------------------------------------------------------------------------- */
  const [request, setRequest] = useState({
    account_name: '',
    bank_name: '',
    account_number: '',
    ifsc_code: '',
    upi_id: '',
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
        headerName={'Payment Details'}
        hideProfile={true}
        naviagateBack={'MyCardDetail'}
      />
      <ScrollView
        style={styles.maincontainer}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <AppTextInput
              label={'Account Name'}
              placeholder={'Enter Account Name'}
              name="account_name"
              value={getValue(request, `account_name`, '')}
              onChangeText={e => onChange('account_name', e)}
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
              label={'Bank Name'}
              placeholder={'Enter Bank Name'}
              name="bank_name"
              value={getValue(request, `bank_name`, '')}
              onChangeText={e => onChange('bank_name', e)}
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
              label={'Account Number'}
              placeholder={'Enter Account Number'}
              name="account_number"
              value={getValue(request, `account_number`, '')}
              onChangeText={e => onChange('account_number', e)}
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
              label={'IFSC Code'}
              placeholder={'Enter IFSC Code'}
              name="ifsc_code"
              value={getValue(request, `ifsc_code`, '')}
              onChangeText={e => onChange('ifsc_code', e)}
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
              label={'UPI ID'}
              placeholder={'Enter UPI Id'}
              name="upi_id"
              value={getValue(request, `upi_id`, '')}
              onChangeText={e => onChange('upi_id', e)}
              backgroundColor={colors.white}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
         
          <TouchableOpacity style={styles.button}>
            <AppText style={styles.buttonText}>Submit</AppText>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </MainLayout>
  )
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
  picker: {
    height: hp(200),
  }
})
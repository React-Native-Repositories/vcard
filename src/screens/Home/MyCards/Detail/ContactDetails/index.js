import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../../../Layout/MainLayout';
import AppHeader from '../../../../../components/common/AppHeader';
import {AppTextInput, AppText} from '../../../../../components';
import {colors} from '../../../../../common/colors';
import {hp} from '../../../../../../utils/dimensions';
import {RFValue} from '../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import {getValue} from '../../../../../../utils/lodash';

export default function ContactDetails() {
  /* -------------------------------------------------------------------------- */
  /*                               Usestate Section                             */
  /* -------------------------------------------------------------------------- */
  const [request, setRequest] = useState({
    full_name: '',
    designation: '',
    email: '',
    phone_number: '',
    whatsapp_number: '',
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
        headerName={'Contact Details'}
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
              label={'Full Name'}
              placeholder={'Enter Full Name'}
              name="full_name"
              value={getValue(request, `full_name`, '')}
              onChangeText={e => onChange('full_name', e)}
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
              label={'Designation'}
              placeholder={'Enter Designation'}
              name="designation"
              value={getValue(request, `designation`, '')}
              onChangeText={e => onChange('designation', e)}
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
              label={'Email'}
              placeholder={'Enter Email'}
              name="email"
              value={getValue(request, `email`, '')}
              onChangeText={e => onChange('email', e)}
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
              label={'Phone Number'}
              placeholder={'Enter Phone Number'}
              name="phone_number"
              value={getValue(request, `phone_number`, '')}
              onChangeText={e => onChange('phone_number', e)}
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
              label={'WhatsApp Number'}
              placeholder={'Enter WhatsApp Number'}
              name="whatsapp_number"
              value={getValue(request, `whatsapp_number`, '')}
              onChangeText={e => onChange('whatsapp_number', e)}
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
  },
});

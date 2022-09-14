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
    location_url: '',
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
        headerName={'Location'}
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
              label={'Location'}
              placeholder={'Search Location'}
              name="location_url"
              value={getValue(request, `location_url`, '')}
              onChangeText={e => onChange('location_url', e)}
              backgroundColor={colors.white}
              lpColor={'#A5A5A5'}
              height={hp(50)}
              borderRadius={hp(5)}
              fontSize={RFValue(12)}
              borderColor={colors.textInputBorder}
              style={styles.text}
            />
          </View>
          <View style={[styles.map,styles.header]}>
            <AppText>Map Here</AppText>
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
  map:{
    marginTop:hp(10),
      height:hp(376),
      borderWidth:0.5,
      backgroundColor:colors.white,
      borderColor:colors.gray,
      justifyContent:'center',
      alignItems:'center'
  }
});

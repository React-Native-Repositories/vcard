import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import MainLayout from '../../../../../Layout/MainLayout'
import AppHeader from '../../../../../components/common/AppHeader'
import { AppTextInput, AppText } from '../../../../../components'
import { getValue } from '../../../../../../utils/lodash'
import { colors } from '../../../../../common/colors'
import { hp } from '../../../../../../utils/dimensions'
import { RFValue } from '../../../../../../utils/npm-helper/react-native-responsive-fontsize'

export default function SocialMedia() {
    /* -------------------------------------------------------------------------- */
  /*                               Usestate Section                             */
  /* -------------------------------------------------------------------------- */
  const [request, setRequest] = useState({
    facebook_url: '',
    twitter_url: '',
    instagram_url: '',
    skype_url: '',
    youtube_url: '',
    linkedin_url: '',
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
        headerName={'Social Media'}
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
              label={'Facebook'}
              placeholder={'Enter Facebook Url'}
              name="facebook_url"
              value={getValue(request, `facebook_url`, '')}
              onChangeText={e => onChange('facebook_url', e)}
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
              label={'Twitter'}
              placeholder={'Enter Twitter Url'}
              name="twitter_url"
              value={getValue(request, `twitter_url`, '')}
              onChangeText={e => onChange('twitter_url', e)}
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
              label={'Instagram'}
              placeholder={'Enter Instagram Url'}
              name="instagram_url"
              value={getValue(request, `instagram_url`, '')}
              onChangeText={e => onChange('instagram_url', e)}
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
              label={'Youtube'}
              placeholder={'Enter Youtube Url'}
              name="youtube_url"
              value={getValue(request, `youtube_url`, '')}
              onChangeText={e => onChange('youtube_url', e)}
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
              label={'Skype Url'}
              placeholder={'Enter Skype Url'}
              name="skype_url"
              value={getValue(request, `skype_url`, '')}
              onChangeText={e => onChange('skype_url', e)}
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
              label={'Linkdin Url'}
              placeholder={'Enter Linkdin Url'}
              name="linkedin_url"
              value={getValue(request, `linkedin_url`, '')}
              onChangeText={e => onChange('linkedin_url', e)}
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
  picker: {
    height: hp(200),
  },
});

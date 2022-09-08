import {ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import MainLayout from '../../../../../../Layout/MainLayout';
import AppHeader from '../../../../../../components/common/AppHeader';
import {AppTextInput, AppText} from '../../../../../../components';
import {getValue} from '../../../../../../../utils/lodash';
import {colors} from '../../../../../../common/colors';
import {hp} from '../../../../../../../utils/dimensions';
import {RFValue} from '../../../../../../../utils/npm-helper/react-native-responsive-fontsize';

export default function CreateCardSocialMedia() {
  /* -------------------------------------------------------------------------- */
  /*                               Usestate Section                             */
  /* -------------------------------------------------------------------------- */
  const [request, setRequest] = useState({
    facebook_url: '',
    twitter_url: '',
    instagram_url: '',
    youtube_url: '',
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
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    width: '90%',
    alignSelf: 'center',
  },
  container: {
    width: '90%',
  },
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

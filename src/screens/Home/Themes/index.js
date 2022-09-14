import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../common/colors';
import {useNavigation} from '@react-navigation/native';
import {hp, windowWidth, wp} from '../../../../utils/dimensions';
import MainLayout from '../../../Layout/MainLayout';
import AppHeader from '../../../components/common/AppHeader';
import {AppIcon, AppText} from '../../../components';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import {getValue} from '../../../../utils/lodash';
export default function ThemesScreen() {
  const [data] = useState([
    {
      url: 'https://www.digitalvcards.net/media/images/digital-business-card-template-1.jpg',
      id: 1,
    },
    {
      url: 'https://www.digitalvcards.net/media/images/digital-business-card-template-2.jpg',
      id: 2,
    },
    {
      url: 'https://www.digitalvcards.net/media/images/digital-business-card-template-3.jpg',
      id: 3,
    },
    {
      url: 'https://www.digitalvcards.net/media/images/digital-business-card-template-4.jpg',
      id: 4,
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <View style={styles.textContainer}>
        <View
          style={{
            minHeight: hp(100),
            backgroundColor: colors.white,
            borderRadius: hp(10),
            justifyContent: 'center',
          }}>
          <View style={{marginBottom: 30, marginTop: 20}}>
            <Image
              source={{uri: getValue(item, `url`)}}
              style={{height: hp(300), width: '100%'}}
              resizeMode="contain"
            />
          </View>
          <Pressable
            delayPressIn={0}
            style={{
              flexDirection: 'row',
              backgroundColor: colors.secondary,
              borderWidth: 3,
              borderColor: colors.white,
              padding: hp(10),
              justifyContent: 'center',
              alignSelf: 'center',
              width: '50%',
              borderTopLeftRadius:10,
              borderTopRightRadius:10
            }}>
            <AppText style={{color: 'white', fontSize: RFValue(18)}}>
              View
            </AppText>
            <AppIcon
              name="eye"
              size={25}
              style={{marginLeft: 4}}
              color={colors.white}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <MainLayout style={{width: '100%'}}>
      <AppHeader headerName={'Themes'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: hp(20)}}>
          <FlatList
            style={[styles.categoriesContainer, {alignSelf: 'center'}]}
            data={data}
            keyExtractor={item => item.id}
            renderItem={renderItem}
          />
        </View>
      </ScrollView>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    width: '90%',
    // alignItems: 'center',
    // backgroundColor: 'white',
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  item: {
    marginTop: 11,
    marginRight: 11,
  },
  textContainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  textView: {
    alignSelf: 'center',
    height: hp(50),
  },
  text: {
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(5),
    // fontWeight:'500',
    color: colors.black,
  },
  headerText: {
    fontSize: RFValue(20),
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'GoogleSans-Medium',
    marginTop: hp(20),
    // backgroundColor:colors.secondary,
    padding: 10,
    // borderWidth:3,
    borderColor: colors.white,
    color: colors.primary,
  },
  amount: {
    fontSize: RFValue(18),
    fontFamily: 'GoogleSans-Regular',
    textAlign: 'center',
    marginTop: hp(5),
    fontWeight: '500',
  },
  description: {
    fontSize: RFValue(16),
    fontFamily: 'GoogleSans-Regular',
    textAlign: 'center',
    marginTop: hp(5),
    color: colors.black,
  },
});

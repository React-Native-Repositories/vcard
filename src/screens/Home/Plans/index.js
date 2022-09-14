import {
  FlatList,
  Image,
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
export default function PlanScreen() {
  const [data] = useState([
    {
      title: 'Gold Plan',
      amount: '1200',
      type: '1 Year',
      description: '( For Year )',
      offerText: 'Offer Valid till 30-Sep-2020',
      features: [
        {text: 'Share cards with everyone', active: true},
        {text: 'Update card Unlimited times', active: true},
        {text: 'Profile Photo / Company Logo', active: true},
        {text: 'Name & Contact Number', active: true},
        {text: 'Social Media Links', active: true},
        {text: 'Whatsapp Chat without saving', active: true},
        {text: 'Email Instantly', active: true},
        {text: 'Call Now in a Touch', active: true},
        {text: 'Website in a Click', active: true},
        {text: 'Google Map Link', active: true},
        {text: 'Payment Section', active: true},
        {text: 'Your Products / Services', active: true},
        {text: 'Photos in Gallery', active: true},
        {text: 'Youtube Video Gallery', active: true},
        {text: 'Product with images', active: true},
        {text: 'Contact Form Included', active: true},
        {text: 'QR Code Generation', active: true},
      ],
    },
    {
      title: 'Silver Plan',
      amount: '600',
      type: '6 Months',
      description: '( For 6 Months )',
      offerText: 'Offer Valid till 30-Sep-2020',
      features: [
        {text: 'Share cards with everyone', active: true},
        {text: 'Update card Unlimited times', active: true},
        {text: 'Profile Photo / Company Logo', active: true},
        {text: 'Name & Contact Number', active: true},
        {text: 'Social Media Links', active: true},
        {text: 'Whatsapp Chat without saving', active: true},
        {text: 'Email Instantly', active: true},
        {text: 'Call Now in a Touch', active: true},
        {text: 'Website in a Click', active: true},
        {text: 'Google Map Link', active: true},
        {text: 'Payment Section', active: true},
        {text: 'Your Products / Services', active: true},
        {text: 'Photos in Gallery', active: true},
        {text: 'Youtube Video Gallery', active: true},
        {text: 'Product with images', active: true},
        {text: 'Contact Form Included', active: true},
        {text: 'QR Code Generation', active: true},
      ],
    },
    {
      title: 'Bronze Plan',
      amount: '300',
      type: '3 Months',
      description: '( For 3 Months )',
      offerText: 'Offer Valid till 30-Sep-2020',
      features: [
        {text: 'Share cards with everyone', active: true},
        {text: 'Update card Unlimited times', active: true},
        {text: 'Profile Photo / Company Logo', active: true},
        {text: 'Name & Contact Number', active: true},
        {text: 'Social Media Links', active: true},
        {text: 'Whatsapp Chat without saving', active: true},
        {text: 'Email Instantly', active: true},
        {text: 'Call Now in a Touch', active: true},
        {text: 'Website in a Click', active: true},
        {text: 'Google Map Link', active: true},
        {text: 'Payment Section', active: true},
        {text: 'Your Products / Services', active: true},
        {text: 'Photos in Gallery', active: true},
        {text: 'Youtube Video Gallery', active: true},
        {text: 'Product with images', active: true},
        {text: 'Contact Form Included', active: true},
        {text: 'QR Code Generation', active: true},
      ],
    },
  ]);

  return (
    <MainLayout style={{width: '100%'}}>
      <AppHeader headerName={'Plans'} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={{marginTop: hp(20)}}>
          <FlatList
            style={[styles.categoriesContainer, {alignSelf: 'center'}]}
            data={data}
            keyExtractor={item => item.id}
            renderItem={({item}) => {
              return (
                <View style={styles.textContainer}>
                  <View
                    style={{
                      minHeight: hp(100),
                      backgroundColor: colors.white,
                      borderRadius: hp(10),
                      justifyContent: 'center',
                    }}>
                    <View style={{marginBottom: 30}}>
                      <AppText style={styles.headerText}>{item?.title}</AppText>
                      <AppText style={[styles.amount]}>
                        ₹{item?.amount}/-
                      </AppText>
                      <AppText style={styles.description}>
                        /{item?.type}
                      </AppText>
                      <AppText
                        style={[
                          styles.description,
                          {color: colors.red, marginBottom: hp(20)},
                        ]}>
                        {item?.offerText}
                      </AppText>

                      <TouchableOpacity
                      delayPressIn={0}
                      style={{
                        flexDirection: 'row',
                        backgroundColor: colors.secondary,
                        borderWidth: 3,
                        borderColor: colors.white,
                        padding: hp(15),
                        justifyContent: 'center',
                        alignSelf: 'center',
                        width:'50%',
                        marginBottom:30
                      }}>
                      <AppText style={{color: 'white', fontSize: RFValue(18)}}>
                        Subscribe
                      </AppText>
                      <AppIcon name="log-in" size={25} color={colors.white} />
                    </TouchableOpacity>

                    
                      {getValue(item, `features`, []).map(items => {
                        return (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <AppIcon
                              name={items.active ? 'checkmark' : 'close'}
                              size={20}
                              style={{
                                marginLeft: hp(20),
                                marginRight: hp(10),
                              }}
                              color={items.active ? colors.green : colors.red}
                            />
                            <AppText style={styles.description}>
                              {items?.text}
                            </AppText>
                          </View>
                        );
                      })}
                    </View>
                  </View>
                </View>
              );
            }}
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
    marginTop: hp(15),
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
    fontSize: RFValue(16),
    fontWeight: '800',
    textAlign: 'center',
    fontFamily: 'GoogleSans-Regular',
    marginTop: hp(20),
    // backgroundColor:colors.secondary,
    padding: 10,
    // borderWidth:3,
    borderColor: colors.white,
    color: colors.black,
  },
  amount: {
    fontSize: RFValue(35),
    fontFamily: 'GoogleSans-Bold',
    textAlign: 'center',
    marginTop: hp(5),
    fontWeight: '900',
    color: colors.black,
  },
  description: {
    fontSize: RFValue(12),
    fontFamily: 'GoogleSans-Regular',
    textAlign: 'center',
    marginTop: hp(5),
    color: colors.black,
  },
});

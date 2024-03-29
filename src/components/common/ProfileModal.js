import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Image} from 'native-base';
import {getToken} from '../../../utils/storage-helpers';
import {getValue} from '../../../utils/lodash';
import {hp, wp} from '../../../utils/dimensions';
import AppText from '../AppText';
import {ThemeColors} from '../../../theme';
import AppIcon from '../AppIcon';
import AnimatedPressable from '../AppAnimatedPressable';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import { colors } from '../../common/colors';

export default function ProfileModal(props) {
  const isThemeDark = false;
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let user = await getToken('user');
    let info = user && JSON.parse(user);
    setUserInfo(info ? info : {});
  };

  return (
    <View>
      <Modal
        visible={props.modalVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          props.closeModal();
        }}>
        <Pressable
          delayPressIn={0}
          style={{flex: 1}}
          activeOpacity={1}
          onPressOut={() => {
            props.closeModal();
          }}>
          <View
            style={{
              position: 'absolute',
              top: 60,
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              minHeight: hp(310),
            }}>
            <View
              style={{
                margin: 20,
                backgroundColor: isThemeDark
                  ? ThemeColors.dark.headerColor
                  : ThemeColors.white,
                borderRadius: 20,
                padding: 35,
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 2,
                },
                shadowOpacity: 0.25,
                shadowRadius: 4,
                elevation: 5,
              }}>
              <View>
                {/* <AnimatedPressable
                  delayPressIn={0}
                  onPress={() => props.closeModal()}
                  style={{position: 'absolute', left: 0, top: hp(15)}}>
                  <AppIcon
                    name="close-outline"
                    size={hp(26)}
                    color={isThemeDark ? 'white' : 'black'}
                  />
                </AnimatedPressable> */}
                <Image
                  source={require(`../../assets/images/logo.png`)}
                  height={hp(48)}
                  width={wp(133)}
                  resizeMode="contain"
                  style={{alignSelf:'center'}}
                  alt="logo"
                />
              </View>
              <View
                style={{
                  marginTop: hp(26),
                }}>
                <View
                  style={{
                    height: hp(32),
                    width: hp(32),
                    borderRadius: hp(16),
                    backgroundColor: colors.tabMenuActive,
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'absolute',
                    left: 0,
                    // top: 15,
                  }}>
                  <AppText style={{color: 'white', fontSize: RFValue(14)}}>
                    {/* {getValue(userInfo, `email`, '') &&
                      getValue(userInfo, `email`, '').charAt(0).toUpperCase()} */}
                      SK
                  </AppText>
                </View>
                <View
                  style={{
                    marginLeft: hp(45),
                  }}>
                  <AppText
                    style={{
                      fontSize: RFValue(12),
                      fontWeight: '500',
                      fontFamily: 'GoogleSans-Medium',
                      color:colors.black
                    }}>
                    {/* {getValue(userInfo, `vendor.vendor_name`, '')} */}
                    T Sethu Kumar
                  </AppText>
                  <AppText
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: 'GoogleSans-Regular',
                    }}>
                    {/* {getValue(userInfo, `email`, '')} */}
                    sethukumar0001@gmail.com
                  </AppText>
                  {/* <Text
                    style={{
                      fontSize: RFValue(10),
                      fontFamily: 'GoogleSans-Regular',
                      padding: 5,
                      backgroundColor: '#00000029',
                      borderRadius: 5,
                      color: isThemeDark ? 'white' : 'black',
                    }}>
                    {' '}
                    Org ID : {getValue(userInfo, `org_id`, '')}
                  </Text> */}
                </View>
              </View>
              <View
                style={{
                  marginTop: hp(16),
                  borderWidth: 0.5,
                  borderColor: '#DADCE0',
                  width: '100%',
                }}
              />
              <Pressable
                delayPressIn={0}
                style={{marginTop: hp(20), justifyContent: 'center'}}
                onPress={() => {
                  Alert.alert(
                    'Logout',
                    'Are you sure you want to Logout?',
                    [
                      {
                        text: 'Cancel',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'OK',
                        onPress: () => {
                          props.logout();
                        },
                      },
                    ],
                    {
                      cancelable: false,
                    },
                  );
                  return true;
                }}>
                {/* <LogoutSvgComponent
                  color={isThemeDark ? 'white' : '#5f6368'}
                  style={{
                    position: 'absolute',
                    left: 0,
                  }}
                /> */}
                <AppIcon
                  name="log-out-outline"
                  size={hp(24)}
                  color={isThemeDark ? 'white' : 'black'}
                  style={{
                    position: 'absolute',
                    left: 0,
                  }}
                />
                <Text
                  style={{
                    color: isThemeDark ? 'white' : '#5F6368',
                    marginLeft: hp(45),
                    fontFamily: 'GoogleSans-Regular',
                    fontSize: RFValue(12),
                    color:colors.black
                  }}>
                  Sign out
                </Text>
              </Pressable>
              <View style={{marginTop: hp(20), justifyContent: 'center'}}>
                {/* <HelpSvgComponent
                  color={isThemeDark ? 'white' : '#5f6368'}
                  style={{
                    position: 'absolute',
                    left: 0,
                  }}
                /> */}
                <AppIcon
                  name="help-circle-outline"
                  size={hp(24)}
                  color={isThemeDark ? 'white' : 'black'}
                  style={{
                    position: 'absolute',
                    left: 0,
                  }}
                />
                <Text
                  style={{
                    color: isThemeDark ? 'white' : '#5F6368',
                    marginLeft: hp(45),
                    fontFamily: 'GoogleSans-Regular',
                    textAlign: 'left',
                    fontSize: RFValue(12),
                    color:colors.black
                  }}>
                  Help & Feedback
                </Text>
              </View>
              <View
                style={{
                  borderWidth: 0.5,
                  borderColor: '#DADCE0',
                  width: '100%',
                  marginTop: hp(16),
                }}
              />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                  marginTop: hp(16),
                }}>
                <AppText
                  style={{
                    fontSize: RFValue(10),
                    fontFamily: 'GoogleSans-Regular',
                  }}>
                  Privacy Policy
                </AppText>
                <View
                  style={{
                    height: 3,
                    width: 3,
                    borderRadius: 1.5,
                    backgroundColor: '#5F6368',
                  }}
                />
                <AppText
                  style={{
                    fontSize: RFValue(10),
                    fontFamily: 'GoogleSans-Regular',
                  }}>
                  Terms of Service
                </AppText>
              </View>
            </View>
          </View>
        </Pressable>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});

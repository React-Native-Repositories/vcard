import React, {useEffect, useState} from 'react';
import {Pressable, StyleSheet, TouchableOpacity} from 'react-native';
import {
  Box,
  Button,
  HStack,
  Icon,
  IconButton,
  Modal,
  StatusBar,
  Text,
  View,
  VStack,
} from 'native-base';
import {hp, wp} from '../../../utils/dimensions';
import AppIcon from '../AppIcon';
import AppText from '../AppText';
import {getToken, removeToken} from '../../../utils/storage-helpers';
import {getValue} from '../../../utils/lodash';
import ProfileModal from './ProfileModal';
import {useNavigation} from '@react-navigation/native';
import {colorModeManager, ThemeColors} from '../../../theme';
import AnimatedPressable from '../AppAnimatedPressable';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import {colors} from '../../common/colors';

function AppHeader(props) {
  const {
    // navigation,
    headerName,
    search,
    submit,
    isSubmitLoading,
    handleSubmit,
    handleCloseSearch,
    hideProfile,
    naviagateBack,
    add,
    openModal,
    handleOpenModal,
  } = props;
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let user = await getToken('user');
    let info = user && JSON.parse(user);
    setUserInfo(info ? info : {});
  };

  const [modalVisible, setModalVisible] = React.useState(false);
  const closeModal = () => {
    setModalVisible(!modalVisible);
  };
  const logout = async () => {
    closeModal();
    await removeToken('user');
    await removeToken('access_token');
    await removeToken('refresh_token');
    navigation.navigate('Login');
    // NativeModules.DevMenu.reload();
  };
  const isThemeDark = false;
  return (
    <Box
      style={{
        borderBottomWidth: 0.5,
        zIndex: 1,
        borderColor: !isThemeDark ? '#DADCE0' : ThemeColors.dark.headerColor,
        height: hp(64),
        backgroundColor: isThemeDark ? ThemeColors.dark.headerColor : '#fff',
        justifyContent: 'center',
      }}>
      <StatusBar bg="white" barStyle="light-content" />
      <HStack
        // bg="white"
        px="1"
        py="3"
        justifyContent="space-between"
        alignItems="center"
        w="100%">
        <HStack alignItems="center" marginLeft={28}>
          {naviagateBack && (
            <AnimatedPressable
              onPress={() => navigation.navigate(naviagateBack)}
              delayPressIn={0}
              style={{marginRight: 20}}>
              <AppIcon
                name="arrow-back-outline"
                size={hp(25)}
                color={'#5F6368'}
              />
            </AnimatedPressable>
          )}
          {naviagateBack && <View style={{marginLeft: 20}}></View>}

          <AppText
            style={{fontSize: RFValue(14), color: colors.black}}
            fontWeight="bold">
            {headerName ? headerName : 'Home'}
          </AppText>
        </HStack>
        <HStack marginRight={28} alignItems={'center'}>
          {submit &&
            (isSubmitLoading ? (
              <Button variant="unstyled" isLoading>
                Button
              </Button>
            ) : (
              <Pressable onPress={() => handleSubmit()} delayPressIn={0}>
                <AppIcon
                  name={'checkmark-circle'}
                  size={hp(35)}
                  color={'#15803d'}
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                />
              </Pressable>
            ))}
          {add && (
            <AnimatedPressable
              delayPressIn={0}
              onPress={() => navigation.navigate(`CreateCardStepOne`)}>
              <AppIcon
                name="add-circle"
                color={isThemeDark ? 'white' : 'black'}
                size={hp(30)}
              />
            </AnimatedPressable>
          )}
          {openModal && (
            <AnimatedPressable onPress={handleOpenModal}>
              <AppIcon
                name="add"
                color={isThemeDark ? 'white' : 'black'}
                size={hp(25)}
              />
            </AnimatedPressable>
          )}
          {search && (
            <AnimatedPressable onPress={handleCloseSearch} delayPressIn={0}>
              <AppIcon
                name="search-outline"
                color={isThemeDark ? 'white' : 'black'}
                size={hp(24)}
              />
            </AnimatedPressable>
          )}
          {!hideProfile && (
            <TouchableOpacity
              style={{
                height: hp(32),
                width: hp(32),
                borderRadius: hp(16),
                backgroundColor: colors.yellow,
                marginLeft: hp(18),
                alignItems: 'center',
                justifyContent: 'center',
              }}
              delayPressIn={0}
              onPress={() => setModalVisible(!modalVisible)}>
              <AppText style={{color: 'white', fontSize: RFValue(14)}}>
                {getValue(userInfo, `email`, '') &&
                  getValue(userInfo, `email`, '').charAt(0).toUpperCase()}
              </AppText>
            </TouchableOpacity>
          )}
        </HStack>
      </HStack>
      <ProfileModal
        modalVisible={modalVisible}
        closeModal={closeModal}
        logout={logout}
      />
    </Box>
  );
}

const styles = StyleSheet.create({
  button: {
    marginVertical: 10,
  },
});

export default AppHeader;

import {
  Alert,
  BackHandler,
  FlatList,
  Pressable,
  ScrollView,
  Share,
  StatusBar,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../common/colors';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {hp, wp} from '../../../../utils/dimensions';
import MainLayout from '../../../Layout/MainLayout';
import AppHeader from '../../../components/common/AppHeader';
import {AppIcon, AppText} from '../../../components';
import {RFValue} from '../../../../utils/npm-helper/react-native-responsive-fontsize';
import BottomModal from '../../../components/common/BottomModal';

export default function MyCards() {
  const [data] = useState([
    {
      id: 1,
      name: 'T Sethu Kumar',
      title: 'Software Developer',
      status: 'Active',
      colorCode: '#F5B041',
    },
    {
      id: 1,
      name: 'T Sethu Kumar',
      title: 'Software Developer',
      status: 'Pending',
      colorCode: '#28B463',
    },
    {
      id: 1,
      name: 'T Sethu Kumar',
      title: 'Software Developer',
      status: 'Pending',
      colorCode: '#BB8FCE',
    },
    {
      id: 1,
      name: 'T Sethu Kumar',
      title: 'Software Developer',
      status: 'Active',
      colorCode: '#EDBB99',
    },
  ]);
  const navigation = useNavigation();
  const columns = 2;

  const [isModalVisible, setIsModalVisibility] = useState(false);
  const showModal = () => {
    console.log('he');
    setIsModalVisibility(true);
  };
  const hideModal = () => {
    setIsModalVisibility(false);
  };

  const navigateToEditPage = () => {
    navigation.navigate('MyCardDetail');
    hideModal();
  };

  const onShare = async () => {
    hideModal();
    try {
      const result = await Share.share({
        title: 'App link',
        message: 'Please open this url , AppLink :',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        Alert.alert('Hold on!', 'Are you sure you want to Exit?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {text: 'YES', onPress: () => BackHandler.exitApp()},
        ]);
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );

  return (
    <MainLayout>
      <AppHeader headerName={'My Cards'} add={true} />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <FlatList
            // data={createRows(data, columns)}
            style={{marginBottom: 15}}
            data={data}
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id}
            numColumns={columns}
            renderItem={({item}) => {
              if (item.empty) {
                return <View style={[styles.item, styles.itemEmpty]} />;
              }
              return (
                <View style={styles.item}>
                  <View style={styles.textContainer}>
                    <TouchableOpacity
                      style={{
                        height: hp(80),
                        backgroundColor: colors.white,
                        borderTopLeftRadius: hp(10),
                        borderTopRightRadius: hp(10),
                        justifyContent: 'center',
                        borderWidth: 0.5,
                        borderTopColor: item.colorCode
                          ? item.colorCode
                          : colors.gray,
                        alignItems: 'center',
                        // borderColor:colors.white
                        borderColor: colors.white,
                      }}
                      onPress={() => showModal()}>
                      <TouchableOpacity
                        style={{
                          marginLeft: 5,
                          position: 'absolute',
                          right: 0,
                          top: 10,
                          right: 10,
                        }}
                        onPress={showModal}>
                        <AppIcon
                          name={'ellipsis-vertical'}
                          size={hp(18)}
                          color={'gray'}
                        />
                      </TouchableOpacity>
                      <Image
                        source={require(`../../../assets/images/logo.png`)}
                        style={{height: hp(50), width: wp(50)}}
                      />
                    </TouchableOpacity>

                    <View
                      style={{
                        // flexDirection: 'row',
                        backgroundColor: colors.white,
                        borderWidth: 1,
                        padding: hp(15),
                        borderColor: colors.white,
                        borderTopColor: colors.gray,
                        // borderBottomLeftRadius: hp(10),
                        // borderBottomRightRadius: hp(10),
                      }}>
                      <Pressable onPress={() => navigateToEditPage()}>
                        <View>
                          <AppText
                            fontWeight="bold"
                            style={[
                              styles.text,
                              {
                                fontWeight: '500',
                                color: colors.black,
                                fontFamily: 'GoogleSans-Medium',
                              },
                            ]}>
                            {item.name.length > 20
                              ? item.name.slice(0, 20).concat('...')
                              : item.name}
                          </AppText>
                          <AppText
                            style={[styles.text, {fontSize: RFValue(9)}]}>
                            {item.title.length > 20
                              ? item.title.slice(0, 20).concat('...')
                              : item.title}
                          </AppText>
                          {/* <AppText
                            style={[
                              styles.text,
                              {
                                color:
                                  item.status === 'Active'
                                    ? '#28B463'
                                    : colors.red,
                              },
                            ]}>
                            {item.status}
                          </AppText> */}
                        </View>
                      </Pressable>
                    </View>
                  </View>
                </View>
              );
            }}
          />
        </View>
      </ScrollView>
      {isModalVisible && (
        <BottomModal
          isShow={isModalVisible}
          close={() => hideModal()}
          navigateToEditPage={navigateToEditPage}
          onShare={onShare}
        />
      )}
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    width: '90%',
    alignSelf: 'center',
    marginTop: hp(8),
    // backgroundColor: 'red',
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  item: {
    marginTop: 11,
    marginRight: 11,
  },
  textContainer: {
    width: wp(156),
  },
  textView: {
    alignSelf: 'center',
    height: hp(50),
  },
  text: {
    // fontSize: RFValue(11),
    marginLeft: hp(10),
    // color: colors.black,
  },
  image: {
    justifyContent: 'center',
  },
});

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
import {colors} from '../../../../common/colors';
import {useNavigation} from '@react-navigation/native';
import {hp, windowWidth, wp} from '../../../../../utils/dimensions';
import MainLayout from '../../../../Layout/MainLayout';
import AppHeader from '../../../../components/common/AppHeader';
import {AppIcon, AppText} from '../../../../components';
import {RFValue} from '../../../../../utils/npm-helper/react-native-responsive-fontsize';
export default function MyCardDetail() {
  const [data] = useState([
    {
      name: 'Business Info',
      id: 1,
      icon: 'business',
      color: '#EC7063',
      url: 'BusinessInfo',
    },

    {
      name: 'Contact Details',
      id: 3,
      icon: 'person-circle',
      color: '#28B463',
      url: 'ContactDetails',
    },
    {
      name: 'Gallery',
      id: 4,
      icon: 'images',
      color: '#EA401F',
      url: 'Gallery',
    },
    {
      name: 'Location',
      id: 5,
      icon: 'location',
      color: '#CA2919',
      url: 'Locations',
    },
    {
      name: 'Products',
      id: 6,
      icon: 'albums',
      color: '#F39C12',
      url: 'Products',
    },
    {
      name: 'Documents',
      id: 7,
      icon: 'documents',
      color: '#BB8FCE',
      url: 'Documents',
    },
    {
      name: 'Clients',
      id: 8,
      icon: 'people-circle',
      color: '#5D6D7E',
      url: 'Clients',
    },
    {
      name: 'Branches',
      id: 9,
      icon: 'pin',
      color: '#5B2C6F',
      url: 'Branches',
    },
    {
      name: 'Services',
      id: 2,
      icon: 'hand-left',
      color: '#3498DB',
      url: 'Services',
    },
    {
      name: 'Social Media',
      id: 10,
      icon: 'share-social',
      color: '#943126',
      url: 'SocialMedia',
    },
    {
      name: 'payments',
      id: 11,
      icon: 'card',
      color: '#21618C',
      url: 'Payments',
    },
  ]);
  const navigation = useNavigation();
  const columns = 2;
  const [onLoadImage, setLoadImage] = useState(false);
  const imageLoading = () => {
    setLoadImage(true);
  };
  return (
    <MainLayout>
      <AppHeader
        headerName={'My Card'}
        hideProfile={true}
        naviagateBack={'MyCards'}
      />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <FlatList
            // data={createRows(data, columns)}
            style={{marginBottom: hp(15)}}
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
                  <TouchableOpacity style={styles.textContainer} onPress={()=>navigation.navigate(item.url)}>
                    <View
                      style={{
                        height: hp(100),
                        backgroundColor: colors.white,
                        borderTopLeftRadius: hp(10),
                        borderTopRightRadius: hp(10),
                        justifyContent: 'center',
                      }}>
                      <View style={{alignSelf: 'center'}}>
                        <AppIcon
                          name={item.icon}
                          size={hp(40)}
                          color={item.color ? item.color : 'black'}
                        />
                      </View>
                      <AppText style={styles.text}>{item?.name}</AppText>
                    </View>
                  </TouchableOpacity>
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
    alignSelf: 'center',
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
    fontSize: RFValue(12),
    textAlign: 'center',
    marginTop: hp(5),
    // fontWeight:'500',
    color: colors.black,
  },
});

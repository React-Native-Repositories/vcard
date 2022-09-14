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
import {colors} from '../../../../../../common/colors';
import MainLayout from '../../../../../../Layout/MainLayout';
import { AppText} from '../../../../../../components';
import {RFValue} from '../../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import {getValue} from '../../../../../../../utils/lodash';
import {hp, wp} from '../../../../../../../utils/dimensions';
export default function CreateThemeScreen() {
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

  const renderView = ({item}) => {
    if (item.empty) {
      return <View style={[styles.item, styles.itemEmpty]} />;
    } else {
      return (
        <View style={styles.item}>
          <View style={styles.textContainer}>
            <View style={styles.imageView}>
              <Image
                source={{uri: getValue(item, `url`, '')}}
                style={{height: hp(150), width: wp(160), marginTop: hp(40)}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textView}>
              <TouchableOpacity
                style={{
                  backgroundColor: colors.secondary,
                  padding: hp(5),
                  borderRadius: hp(5),
                }}>
                <AppText style={{textAlign: 'center'}}>Select</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      );
    }
  };

  return (
    <MainLayout>
      <View style={{marginTop: hp(10), alignSelf: 'center'}}>
        <FlatList
          style={{marginBottom: 15}}
          data={data}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.id}
          numColumns={2}
          renderItem={renderView}
        />
      </View>
    </MainLayout>
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {
    marginTop: hp(8),
  },
  itemEmpty: {
    backgroundColor: 'transparent',
  },
  item: {
    marginTop: 11,
    marginLeft: 5,
    marginRight: 5,
  },
  textContainer: {
    width: wp(160),
  },
  imageView: {
    minHeight: hp(130),
    backgroundColor: colors.white,
    borderTopLeftRadius: hp(10),
    borderTopRightRadius: hp(10),
    justifyContent: 'space-between',
    borderBottomColor: colors.white,
    borderColor: colors.white,
    flexDirection: 'row',
  },
  textView: {
    backgroundColor: colors.gray,
    borderColor: colors.white,
    padding: hp(10),
    borderBottomLeftRadius: hp(10),
    borderBottomRightRadius: hp(10),
    borderWidth: 2,
  },
  text: {
    fontSize: RFValue(12),
    // marginLeft: hp(10),
    color: colors.black,
    alignSelf: 'center',
  },
});

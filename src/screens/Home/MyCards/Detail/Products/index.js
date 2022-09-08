import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import AppHeader from '../../../../../components/common/AppHeader';
import MainLayout from '../../../../../Layout/MainLayout';
import {AppIcon, AppText} from '../../../../../components';
import {getValue} from '../../../../../../utils/lodash';
import {hp, wp} from '../../../../../../utils/dimensions';
import {RFValue} from '../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import {colors} from '../../../../../common/colors';
import AddEditModal from './add-edit-modal';

export default function Products() {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [request, setRequest] = useState({
    product_image: '',
    product_name: '',
    actual_price: '',
    selling_price: '',
    description: '',
    external_link: '',
  });
  const [list, setList] = useState([
    {
      product_image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80',
      product_name: 'Head Phone',
      actual_price: '10000',
      selling_price: '5000',
      description: 'Wireless Head phones',
      external_link: 'https://unsplash.com/s/photos/product',
    },
    {
      product_image:
        'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1699&q=80',
      product_name: 'Smart Watch',
      actual_price: '20000',
      selling_price: '10000',
      description: 'Android Smartwatch',
      external_link: 'https://unsplash.com/s/photos/product',
    },
  ]);

  /* -------------------------------------------------------------------------- */
  /*                               Modal Section                                */
  /* -------------------------------------------------------------------------- */

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  /* -------------------------------------------------------------------------- */
  /*                               OnChange Section                             */
  /* -------------------------------------------------------------------------- */
  const onChange = (name, value) => {
    setRequest({
      ...request,
      [name]: value,
    });
  };
  const renderView = ({item}) => {
    if (item.empty) {
      return <View style={[styles.item, styles.itemEmpty]} />;
    } else {
      return (
        <View style={styles.item}>
          <View style={styles.textContainer}>
            <View style={styles.imageView}>
              <View style={styles.rightCornerIcon}>
                <TouchableOpacity onPress={handleOpenModal}>
                  <AppIcon name={'create'} size={hp(20)} color={colors.green} />
                </TouchableOpacity>
                <TouchableOpacity>
                  <AppIcon
                    name={'trash'}
                    size={hp(20)}
                    style={{left: hp(5)}}
                    color={colors.red}
                  />
                </TouchableOpacity>
              </View>
              <View style={styles.imageLeft}>
                <Image
                  source={{uri: getValue(item, `product_image`, '')}}
                  style={{height: hp(80), width: wp(160), marginTop: hp(20)}}
                  resizeMode="contain"
                />
              </View>
              <View style={styles.imageRight}>
                <AppText>{item.product_name}</AppText>
                <AppText
                  style={[
                    styles.text,
                    {fontSize: RFValue(16), fontWeight: '500'},
                  ]}>
                  ₹ {item.selling_price}
                </AppText>
              </View>
            </View>
            <View style={styles.textView}>
              <View>
                <AppText style={styles.text}>{item.description}</AppText>
                <AppText style={styles.text}>{item.external_link}</AppText>
              </View>
            </View>
          </View>
        </View>
      );
    }
  };
  console.log(openModal);
  return (
    <MainLayout>
      <AppHeader
        headerName={'Products'}
        hideProfile={true}
        naviagateBack={'MyCardDetail'}
        openModal={true}
        handleOpenModal={handleOpenModal}
      />
      {openModal && (
        <AddEditModal
          handleOpenModal={handleOpenModal}
          headerText={`Add Product`}
          request={request}
          onChange={onChange}
          openModal={openModal}
        />
      )}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <View style={styles.categoriesContainer}>
          <FlatList
            style={{marginBottom: 15}}
            data={list}
            // columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id}
            // numColumns={1}
            renderItem={renderView}
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
    marginTop: hp(8),
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
  },
  imageView: {
    height: hp(100),
    backgroundColor: colors.white,
    borderTopLeftRadius: hp(10),
    borderTopRightRadius: hp(10),
    justifyContent: 'space-between',
    borderBottomColor: colors.white,
    borderColor: colors.white,
    flexDirection: 'row',
  },
  imageLeft: {
    width: '50%',
  },
  imageRight: {
    width: '50%',
    justifyContent: 'center',
  },
  rightCornerIcon: {
    position: 'absolute',
    right: hp(15),
    flexDirection: 'row',
    top: hp(10),
    zIndex: 1,
  },
  textView: {
    flexDirection: 'row',
    backgroundColor: colors.gray,
    borderColor: colors.white,
    padding: hp(10),
    borderBottomLeftRadius: hp(10),
    borderBottomRightRadius: hp(10),
    borderWidth: 2,
  },
  text: {
    fontSize: RFValue(12),
    marginLeft: hp(10),
    color: colors.black,
  },
});

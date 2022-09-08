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

export default function Documents() {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [request, setRequest] = useState({
    document_name: '',
    document_url: '',
  });
  const [list, setList] = useState([
    {
      document_url:
        'https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        document_name: 'Document 1',
    },
    {
      document_url:
        'https://images.unsplash.com/photo-1651936716527-c92d541cf630?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        document_name: 'Document 2',
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
              <Image
                source={{uri: getValue(item, `document_url`, '')}}
                style={{height: hp(80), width: wp(160), marginTop: hp(40)}}
                resizeMode="contain"
              />
            </View>
            <View style={styles.textView}>
              <AppText style={styles.text}>{item.document_name}</AppText>
            </View>
          </View>
        </View>
      );
    }
  };
  return (
    <MainLayout>
      <AppHeader
        headerName={'Documents'}
        hideProfile={true}
        naviagateBack={'MyCardDetail'}
        openModal={true}
        handleOpenModal={handleOpenModal}
      />
      {openModal && (
        <AddEditModal
          handleOpenModal={handleOpenModal}
          headerText={`Add Document`}
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
            columnWrapperStyle={{justifyContent: 'space-between'}}
            keyExtractor={item => item.id}
            numColumns={2}
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
    width: wp(156),
  },
  imageView: {
    height: hp(130),
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

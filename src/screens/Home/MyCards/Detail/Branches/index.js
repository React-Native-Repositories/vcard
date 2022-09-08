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

export default function Branches() {
  /* -------------------------------------------------------------------------- */
  /*                               UseState Section                             */
  /* -------------------------------------------------------------------------- */

  const [request, setRequest] = useState({
    branch_name: '',
    address: '',
  });
  const [list, setList] = useState([
    {
      branch_name: 'Branch 1',
      address: 'Branch address',
    },
    {
      branch_name: 'Branch 2',
      address: 'Branch address',
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
              <AppText style={[styles.text,{fontSize:RFValue(14),fontWeight:'500',marginBottom:hp(3)}]}>{item.branch_name}</AppText>
                <AppText style={styles.text}>{item.address}</AppText>
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
        headerName={'Branch'}
        hideProfile={true}
        naviagateBack={'MyCardDetail'}
        openModal={true}
        handleOpenModal={handleOpenModal}
      />
      {openModal && (
        <AddEditModal
          handleOpenModal={handleOpenModal}
          headerText={`Add Branch`}
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
    width: '100%',
    justifyContent:'center',
    marginLeft:hp(30)
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
    // marginLeft: hp(10),
    color: colors.black,
  },
});

import {
  StyleSheet,
  View,
  Modal,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
// import Modal from 'react-native-modal';

import React from 'react';
import {AppIcon, AppText, AppTextInput} from '../../../../../components';
import {hp, windowHeight} from '../../../../../../utils/dimensions';
import {ThemeColors} from '../../../../../../theme';
import {RFValue} from '../../../../../../utils/npm-helper/react-native-responsive-fontsize';
import {colors} from '../../../../../common/colors';
import {getValue} from '../../../../../../utils/lodash';
import AnimatedPressable from '../../../../../components/AppAnimatedPressable';

export default function AddEditModal(props) {
  const isThemeDark = false;
  const {request, onChange} = props;
  return (
    <Modal
      visible={props.openModal}
      animationType="fade"
      coverScreen={true}
      onRequestClose={() => {
        props.handleOpenModal();
      }}>
      <View
        style={{
          width: '100%',
          //   height: windowHeight,
        }}>
        <View
          style={{
            backgroundColor: isThemeDark
              ? ThemeColors.dark.headerColor
              : '#FCFDFF',
            padding: 25,
            // shadowColor: '#000',
            // shadowOffset: {
            //   width: 0,
            //   height: 2,
            // },
            // shadowOpacity: 0.25,
            // shadowRadius: 4,
            // elevation: 5,
          }}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: Platform.OS === 'ios' ? 30 : 0,
              height: hp(44),
              alignItems: 'center',
            }}>
            <AnimatedPressable
              onPress={() => props.handleOpenModal()}
              delayPressIn={0}>
              <AppIcon name={'close'} size={hp(25)} />
            </AnimatedPressable>
            <AppText style={{marginLeft: hp(20)}}>
              {getValue(props, `headerText`, '')}
            </AppText>
          </View>
          <View
            style={{
              borderWidth: 0.5,
              borderBottomColor: '#DADCE0',
            }}
          />
          <ScrollView
            style={styles.maincontainer}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}>
              <View style={styles.logoContainer}></View>
              <View style={styles.header}>
                <AppTextInput
                  label={'Image Name'}
                  placeholder={'Enter Image Name'}
                  name="image_name"
                  value={getValue(request, `image_name`, '')}
                  onChangeText={e => onChange('image_name', e)}
                  backgroundColor={colors.white}
                  lpColor={'#A5A5A5'}
                  height={hp(50)}
                  borderRadius={hp(5)}
                  fontSize={RFValue(12)}
                  borderColor={colors.textInputBorder}
                  style={styles.text}
                />
              </View>

              <TouchableOpacity style={styles.button}>
                <AppText style={styles.buttonText}>Submit</AppText>
              </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    width: '100%',
    alignSelf: 'center',
    marginBottom: hp(50),
  },
  container: {},
  header: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 3,
  },
  button: {
    // width:'90%',
    marginTop: hp(20),
    backgroundColor: colors.yellow,
    padding: hp(13),
    borderRadius: hp(5),
    marginBottom: hp(100),
  },
  buttonText: {
    alignSelf: 'center',
    color: colors.white,
    fontSize: RFValue(16),
    fontWeight: '500',
  },
  logoContainer: {
    alignSelf: 'center',
    marginTop: hp(15),
    height: hp(100),
    width: hp(100),
    borderRadius: hp(50),
    backgroundColor: colors.yellow,
  },
  picker: {
    height: hp(200),
  },
});

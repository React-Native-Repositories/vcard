import React from 'react';
import {View, TouchableOpacity, TouchableHighlight} from 'react-native';
import {Modal} from 'native-base';
import {hp} from '../../../utils/dimensions';
import AppText from '../AppText';
import {colors} from '../../common/colors';
import {RFValue} from '../../../utils/npm-helper/react-native-responsive-fontsize';
import AppIcon from '../AppIcon';

const BottomModal = props => {
  /* -------------------------------------------------------------------------- */
  /*                                 Usestate Section                           */
  /* -------------------------------------------------------------------------- */

  return (
    <Modal
      // animationType="slide"
      transparent={true}
      isOpen={props.isShow}
      onClose={props.close}>
      <TouchableHighlight
        style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.3)'}}
        onPress={props.close}>
        <View />
      </TouchableHighlight>

      <View
        style={{
          backgroundColor: colors.white,
          width: '100%',
          alignItems: 'center',
          padding: hp(20),
          justifyContent: 'center',
          //   minHeight:hp(150)
        }}>
        <TouchableOpacity style={styles.link}>
          <AppIcon name="eye" size={hp(20)} color={colors.green} />
          <AppText style={[styles.text, {color: colors.green}]}>View</AppText>
        </TouchableOpacity>
        <View style={styles.seperator} />
        <TouchableOpacity
          style={styles.link}
          onPress={props.navigateToEditPage}>
          <AppIcon name="create" size={hp(20)} color={colors.yellow} />
          <AppText style={[styles.text, {color: colors.yellow}]}>Edit</AppText>
        </TouchableOpacity>
        <View style={styles.seperator} />

        <TouchableOpacity style={styles.link} onPress={props.onShare}>
          <AppIcon name="share" size={hp(20)} color={colors.violet} />
          <AppText style={[styles.text, {color: colors.violet}]}>Send</AppText>
        </TouchableOpacity>
        <View style={styles.seperator} />

        {/* <TouchableOpacity style={styles.link} onPress={props.close}>
          <AppIcon name="link" size={hp(20)} color={colors.red} />
          <AppText style={[styles.text, {color: colors.red}]}>
            Activated Card
          </AppText>
        </TouchableOpacity> */}
        <View style={styles.seperator} />

        <TouchableOpacity style={styles.link} onPress={props.close}>
          <AppIcon name="close" size={hp(20)} color={colors.red} />
          <AppText style={[styles.text, {color: colors.red}]}>Cancel</AppText>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = {
  link: {
    height: hp(30),
    flexDirection: 'row',
  },
  text: {
    fontSize: RFValue(16),
    color: colors.black,
    marginLeft: hp(5),
  },
  seperator: {
    width: '100%',
    marginTop: hp(5),
    marginBottom: hp(5),
    borderColor: colors.gray,
    borderWidth: 0.5,
  },
};

export default BottomModal;

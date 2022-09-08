import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Input, Icon, FormControl, TextArea} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AppTextArea({
  icon,
  innerIcon,
  width = '100%',
  label,
  error,
  showError,
  handleIconClicked,
  handleInnerIconClicked,
  ...otherProps
}) {
  Ionicons.loadFont();
  return (
    <View style={styles.container}>
      <FormControl>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <TextArea
          // variant="outline"
          w={{
            base: width,
            md: '25%',
          }}
          {...otherProps}
        />
      </FormControl>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
});

export default AppTextArea;

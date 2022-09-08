import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Input, Icon, FormControl} from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';

function AppTextInput({
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
  Ionicons.loadFont()
  return (
    <View style={styles.container}>
      <FormControl>
        {label && <FormControl.Label>{label}</FormControl.Label>}
        <Input
          // variant="outline"
          w={{
            base: width,
            md: '25%',
          }}
          InputLeftElement={
            icon && (
              <Icon
                as={<Ionicons name={icon} />}
                size={5}
                ml="2"
                color="muted.400"
                onPress={handleIconClicked}
              />
            )
          }
          InputRightElement={
            innerIcon && (
              <Icon
                as={<Ionicons name={innerIcon} />}
                size={5}
                mr="2"
                color="muted.400"
                onPress={handleInnerIconClicked}
              />
            )
          }
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

export default AppTextInput;

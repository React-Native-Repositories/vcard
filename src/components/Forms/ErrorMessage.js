import {Text} from 'native-base';
import React from 'react';
import {StyleSheet} from 'react-native';

function ErrorMessage({error, visible}) {
  if (!visible || !error) return null;

  return (
    <Text style={styles.error} fontSize="xs">
      {/* <AppIcon
        name="alert-circle-outline"
        style={[styles.error, {fontSize: 11}]}
      /> */}
      {error}
    </Text>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
  },
});

export default ErrorMessage;

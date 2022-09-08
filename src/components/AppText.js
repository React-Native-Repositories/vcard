import React, {ReactElement} from 'react';
import {Text} from 'react-native';

import defaultStyles from '../../theme/default-styles';
import useThemeToggler from '../../theme/hooks/useThemeToggler';

function AppText({
  children,
  fontSize = 'sm',
  fontFamily = 'GoogleSans-Regular',
  style = {},
  color,
  ...otherProps
}) {
  const {isThemeDark} = useThemeToggler();

  // const cl = color ? color : 'black';

  // if (fontFamily) defaultStyles.text.fontFamily = fontFamily;

  return (
    <Text
      style={[defaultStyles.text, style]}
      fontSize={fontSize}
      // color={cl}
      {...otherProps}>
      {children}
    </Text>
  );
}

export default AppText;

import React, {useEffect} from 'react';
import {useColorMode} from 'native-base';
import {TouchableOpacity} from 'react-native';
import useColorScheme from '../../theme/hooks/useColorScheme';

import useThemeToggler from '../../theme/hooks/useThemeToggler';
import AppIcon from './AppIcon';
import { colorModeManager } from '../../theme';
import AnimatedPressable from './AppAnimatedPressable';
import { hp } from '../../utils/dimensions';

function ToggleDarkMode() {
  const {isThemeDark, toggleTheme, iconName} = useThemeToggler();
  const {toggleColorMode} = useColorMode();
  const colorScheme = useColorScheme();
  const isDarkModeSupported = true;

  const handleToggleTheme = async() => {
    if (isDarkModeSupported) {
      const theme = await colorModeManager.get();
      let mode = theme === 'light' ? 'dark' : 'light';
      await colorModeManager.set(mode);
      toggleTheme();
      // toggleColorMode();
    }
  };

  useEffect(async() => {
    const theme = await colorModeManager.get();
    const isCurrentColorSchemeDark = colorScheme == 'dark';

    // if current colorscheme is light, and app is in dark mode, toggle to light
    // if current colorscheme is dark, and app is in light mode, toggle to dark

    // if (!isCurrentColorSchemeDark && isThemeDark) {
    //   toggleTheme();
    // } else if (isCurrentColorSchemeDark && !isThemeDark) {
    //   toggleColorMode();
    // }
  }, [colorScheme]);

  return (
    <TouchableOpacity onPress={handleToggleTheme} delayPressIn={0}>
      <AppIcon
        name={iconName}
        size={hp(25)}
        color={isThemeDark ? 'white' : 'black'}
      />
    </TouchableOpacity>
  );
}

export default ToggleDarkMode;

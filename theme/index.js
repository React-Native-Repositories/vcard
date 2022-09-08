import React from 'react';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeColors = {
  light: {
    text: '#000000',
    background: '#FCFCFC',
    borderColor: '#E8F0FE',
    inputText: '#3C4043',
    inputLabelColor: '#423F3F',
  },
  dark: {
    text: '#fff',
    background: '#000000',
    headerColor: '#161618',
    borderColor: '#5F6368',
    secondaryTextColor: '#818181',
  },
  primary: '#FCFCFC',
  black: '#000',
  white: '#fff',
  textGray: '#5F6368',
  placeholderTextColor: '#5F6368',
  blue: '#1A73E8',
  redActive: '#B2121B',
  redInactive: '#D7242E',
  green: '#05A357',
};

// native base
import {extendTheme} from 'native-base';

export const NativeBaseTheme = extendTheme({
  colors: ThemeColors,
  config: {
    useSystemColorMode: false,
    initialColorMode: 'light',
  },
});

// Define the colorModeManager,
// here we are using react-native-async-storage (https://react-native-async-storage.github.io/async-storage/)
export const colorModeManager = {
  get: async () => {
    try {
      let val = await AsyncStorage.getItem('@color-mode');
      return val === 'dark' ? 'dark' : 'light';
    } catch (e) {
      return 'light';
    }
  },
  set: async value => {
    try {
      await AsyncStorage.setItem('@color-mode', value);
    } catch (e) {
    }
  },
};

// navigation
export const NavigationDefaultTheme = DefaultTheme;
export const NavigationDarkTheme = DarkTheme;

export const PreferencesContext = React.createContext({
  toggleTheme: () => {},
  isThemeDark: false
});

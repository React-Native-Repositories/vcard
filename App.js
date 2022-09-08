/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import {Alert, LogBox, StyleSheet, Text, View} from 'react-native';
 import React, {useEffect, useState} from 'react';
 import {extendTheme, NativeBaseProvider, useColorMode, useColorModeValue} from 'native-base';
 import {SafeAreaProvider} from 'react-native-safe-area-context';
 import {
   colorModeManager,
   NativeBaseTheme,
   PreferencesContext,
   ThemeColors,
 } from './theme';
 import useColorScheme from './theme/hooks/useColorScheme';
 import {NavigationContainer} from '@react-navigation/native';
 import AuthStackNavigator from './src/navigation/auth-navigator';
 import {getToken} from './utils/storage-helpers';
 import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';
 
 export default function App() {
   /* -------------------------------------------------------------------------- */
   /*                                    Log Section                             */
   /* -------------------------------------------------------------------------- */
   LogBox.ignoreLogs(['Setting a timer for a long period of time']);
   LogBox.ignoreLogs(['NativeBase: The contrast ratio of']);
   LogBox.ignoreAllLogs(true);
   LogBox.ignoreLogs([
     "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
   ]);
 
   const AuthContext = React.createContext();
   /* -------------------------------------------------------------------------- */
   /*                               UseEffect Section                            */
   /* -------------------------------------------------------------------------- */
 
   useEffect(() => {
     getData()
   }, []);
 
   const getData = async() => {
     const theme = await colorModeManager.get();
     setIsThemeDark(theme === 'dark'?true:false)
     async function prepare() {
       try {
         // Pre-load fonts, make any API calls you need to do here
         await initialiseData();
       } catch (e) {
         // console.warn(e);
       } finally {
         // Tell the application to render
         setAppIsReady(true);
       }
     }
     prepare();
   }
 
   /* -------------------------------------------------------------------------- */
   /*                              Usestate Section                              */
   /* -------------------------------------------------------------------------- */
   const [user, setUser] = useState(false);
   const [appIsReady, setAppIsReady] = useState(false);
 
   const colorScheme = true ? useColorScheme() : 'light';
   const [isThemeDark, setIsThemeDark] = React.useState();
   /* -------------------------------------------------------------------------- */
   /*                               On change Section                            */
   /* -------------------------------------------------------------------------- */
   const toggleTheme = React.useCallback(async () => {
   return setIsThemeDark(!isThemeDark);
   }, [isThemeDark]);
 
   const preferences = React.useMemo(
     () => ({
       toggleTheme,
       isThemeDark
     }),
     [
       toggleTheme,
       isThemeDark,
     ],
   );
 
   const initialiseData = async () => {
     const user = await getToken('access_token');
     if (user) setUser(user);
   };
 
   if (!appIsReady) {
     return null;
   }
   /* -------------------------------------------------------------------------- */
   /*                                  Toast Section                             */
   /* -------------------------------------------------------------------------- */
 
   /*
   1. Create the config
 */
   const toastConfig = {
     /*
     Overwrite 'success' type,
     by modifying the existing `BaseToast` component
   */
     success: props => (
       <BaseToast
         {...props}
         style={{borderLeftColor: '#22c55e'}}
         contentContainerStyle={{paddingHorizontal: 15}}
         text1Style={{
           fontSize: 15,
           fontWeight: '400',
         }}
       />
     ),
     /*
     Overwrite 'error' type,
     by modifying the existing `ErrorToast` component
   */
     error: props => (
       <ErrorToast
         {...props}
         style={{borderLeftColor: '#ef4444'}}
         text1Style={{
           fontSize: 17,
         }}
         text2Style={{
           fontSize: 15,
         }}
       />
     ),
     /*
     Or create a completely new type - `tomatoToast`,
     building the layout from scratch.
 
     I can consume any custom `props` I want.
     They will be passed when calling the `show` method (see below)
   */
     tomatoToast: ({text1, props}) => (
       <View style={{height: 60, width: '100%', backgroundColor: 'tomato'}}>
         <Text>{text1}</Text>
         <Text>{props.uuid}</Text>
       </View>
     ),
   };
 
   return (
     <SafeAreaProvider>
       <NativeBaseProvider theme={NativeBaseTheme} colorModeManager={colorModeManager}>
         <NavigationContainer>
           <PreferencesContext.Provider value={preferences}>
             {/* <View
               style={{
                 flex: 1,
                 backgroundColor: colorScheme == 'dark'
                   ? ThemeColors.dark.background
                   : ThemeColors.light.background,
               }}> */}
               {/* <AuthContext.Provider value={{user, setUser}}> */}
               {/* {user ?  */}
               {/* <HomeTabNavigation />  */}
               <AuthStackNavigator />
               {/* } */}
               <Toast config={toastConfig} position="bottom" bottomOffset={20} />
               {/* <ToggleDarkMode /> */}
               {/* </AuthContext.Provider> */}
             {/* </View> */}
           </PreferencesContext.Provider>
         </NavigationContainer>
       </NativeBaseProvider>
     </SafeAreaProvider>
   );
 }
 
 const styles = StyleSheet.create({});
 
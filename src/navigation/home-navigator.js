import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RFValue} from '../../utils/npm-helper/react-native-responsive-fontsize';
import {hp} from '../../utils/dimensions';
import {colors} from '../common/colors';
import MoreScreen from '../screens/Home/More';
import {AppIcon} from '../components';
import MyCards from '../screens/Home/MyCards';
import PlanScreen from '../screens/Home/Plans';
import ThemesScreen from '../screens/Home/Themes';

const Tab = createBottomTabNavigator();
export default function HomeTabNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="MyCards"
      screenOptions={{
        tabBarActiveBackgroundColor: colors.violet,
        tabBarInactiveBackgroundColor: '#857ff5',
        tabBarLabelStyle: {
          fontSize: RFValue(12),
          fontFamily: 'GoogleSans-Regular',
          marginBottom: hp(10),
          // margin: hp(2),
          // padding: 0,
        },
        tabBarStyle: [
          {
            display: 'flex',
            height: Platform.OS === 'ios' ? hp(84) : hp(64),
          },
          null,
        ],
      }}>
      <Tab.Screen
        name="MyCards"
        component={MyCards}
        options={{
          headerShown: false,
          tabBarLabel: 'MyCards',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({focused}) => focused?
          // <RefreshSpinner name={'DashboardSvgComponent'} />:<DashboardSvgComponent />
          tabBarIcon: ({color}) => (
            <AppIcon name="book" size={hp(25)} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Themes"
        component={ThemesScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Themes',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({focused}) => focused?
          // <RefreshSpinner name={'DashboardSvgComponent'} />:<DashboardSvgComponent />
          tabBarIcon: ({color}) => (
            <AppIcon name="layers" size={hp(25)} color={'white'} />
          ),
        }}
      />
      <Tab.Screen
        name="Plans"
        component={PlanScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Plans',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({focused}) => focused?
          // <RefreshSpinner name={'DashboardSvgComponent'} />:<DashboardSvgComponent />
          tabBarIcon: ({color}) => (
            <AppIcon name="cash" size={hp(25)} color={'white'} />
          ),
        }}
      />

      {/* <Tab.Screen
        name="More"
        component={MoreScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'More',
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'white',
          // tabBarIcon: ({focused}) => focused?
          // <RefreshSpinner name={'DashboardSvgComponent'} />:<DashboardSvgComponent />
          tabBarIcon: ({color}) => (
            <AppIcon name="menu" size={hp(25)} color={'white'} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
}
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Auth/Login';
import Register from '../screens/Auth/Register';
import {ThemeColors} from '../../theme';
import HomeTabNavigation from './home-navigator';
import Welcome from '../screens/Auth/Welcome';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import EmailSent from '../screens/Auth/EmailSent';
import MyCardDetail from '../screens/Home/MyCards/Detail';
import Branches from '../screens/Home/MyCards/Detail/Branches';
import BusinessInfo from '../screens/Home/MyCards/Detail/BusinessInfo';
import Clients from '../screens/Home/MyCards/Detail/Clients';
import ContactDetails from '../screens/Home/MyCards/Detail/ContactDetails';
import Gallery from '../screens/Home/MyCards/Detail/Gallery';
import Locations from '../screens/Home/MyCards/Detail/Locations';
import Products from '../screens/Home/MyCards/Detail/Products';
import Share from '../screens/Home/MyCards/Detail/Share';
import SocialMedia from '../screens/Home/MyCards/Detail/SocialMedia';
import Documents from '../screens/Home/MyCards/Detail/Documents';
import Payments from '../screens/Home/MyCards/Detail/Payments';
import Services from '../screens/Home/MyCards/Detail/Services';
import CreateCardStepOne from '../screens/Home/MyCards/Create/Step1';
import CreateCardStepTwo from '../screens/Home/MyCards/Create/Step2';

const Stack = createStackNavigator();

const AuthStackNavigator = () => (
  <Stack.Navigator
    detachInactiveScreens={false}
    // initialRouteName='Main'
    screenOptions={{
      animationEnabled: false,
      headerShown: false,
      headerStyle: {
        backgroundColor: ThemeColors.primary,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'normal',
        color: '#fff',
        headerShown: false,
      },
    }}>
    <Stack.Screen name="Welcome" component={Welcome} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
    <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    <Stack.Screen name="EmailSent" component={EmailSent} />

    <Stack.Screen
      name="Main"
      component={HomeTabNavigation}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="MyCardDetail"
      component={MyCardDetail}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    {/* Add screens */}

    <Stack.Screen
      name="CreateCardStepOne"
      component={CreateCardStepOne}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />

    <Stack.Screen
      name="CreateCardStepTwo"
      component={CreateCardStepTwo}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />

    {/* Edit screens */}

    <Stack.Screen
      name="Services"
      component={Services}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Branches"
      component={Branches}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="BusinessInfo"
      component={BusinessInfo}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Clients"
      component={Clients}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="ContactDetails"
      component={ContactDetails}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Documents"
      component={Documents}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Gallery"
      component={Gallery}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Locations"
      component={Locations}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Products"
      component={Products}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Share"
      component={Share}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="SocialMedia"
      component={SocialMedia}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
    <Stack.Screen
      name="Payments"
      component={Payments}
      options={{
        headerShown: false,
        headerBackTitleVisible: false,
      }}
    />
  </Stack.Navigator>
);

export default AuthStackNavigator;

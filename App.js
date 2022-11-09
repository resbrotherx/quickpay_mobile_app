import React from 'react';
import {StyleSheet,StatusBar, Text, View,TouchableOpacity} from 'react-native';
import Navigation from '../Quickpay/src/constants/Navigation';
import {AuthProvider} from '../Quickpay/src/constants/AuthContext';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Splash,Onboarding,Login,Meter,Accountshootdetails,Payment} from '../Quickpay/src/screens'
import LinearGradient from 'react-native-linear-gradient';
import AppIcon, { Icons } from './src/components/AppIcon';
import Colors from "./src/constants/Colors";






// const Tab = createBottomTabNavigator();

// const TabNavigator = () => {
//   return (
//     <Tab.Navigator
//       tabBar={(props) => <MyTabBar {...props} />}>
//       <Tab.Screen name="Login" component={Login} />
//       <Tab.Screen name="Payment" component={Payment} />
//       <Tab.Screen name="Login" component={Login} />
//     </Tab.Navigator>
//   )
// }

const App = () => {
  return (
    <AuthProvider>
      <StatusBar hidden = {false} backgroundColor="#007ec7" />
        <Navigation />
      {/* <TabNavigator /> */}
    </AuthProvider>
  );
};


export default App;
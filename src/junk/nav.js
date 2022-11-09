import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {AuthContext} from '../constants/AuthContext'

import {StyleSheet,StatusBar, Text, View,TouchableOpacity} from 'react-native';
import {AuthProvider} from '../Quickpay/src/constants/AuthContext';

import 'react-native-gesture-handler';
import {Splash,Onboarding,Login,Meter,Accountshootdetails,Payment} from '../screens'
import LinearGradient from 'react-native-linear-gradient';
import AppIcon, { Icons } from '../components/AppIcon';
import Colors from "./Colors";

const BottomTab = ({ type, color, size = 24, isFocused, index }) => {
  const icon = index == 0 ? 'home' : 'heart';
  const gradient = index == 1;
  return (
    <View>
      {gradient ? (
        <LinearGradient
          colors={[Colors.light, Colors.dark]}
          start={{ x: isFocused ? 0 : 1, y: 0 }} end={{ x: isFocused ? 1 : 0, y: 0 }}
          style={styles.middleIcon}>
          <AppIcon name={'shopping-basket'} type={type} size={size} color={'white'} />
        </LinearGradient>
      ) : (
        <View style={styles.icon}>
          <AppIcon name={icon} type={type} size={size} color={color} />
        </View>
      )}
    </View>
  )
}

const MyTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={styles.bottomBar}>
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;
        const { options } = descriptors[route.key];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          })
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        }

        const color = isFocused ? Colors.dark : Colors.gray;

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            testID={options.tabBarTestID}
            accessibilityRole="button"
          >
            <BottomTab
              type={index !== 1 ? Icons.MaterialCommunityIcons : Icons.FontAwesome5}
              index={index}
              isFocused={isFocused}
              size={24}
              color={color}
            />
          </TouchableOpacity>
        )
      })}
    </View>
  )
}



const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const TabNavigator = ()=>{
  const {userInfo, userInfos, splashLoading} = useContext(AuthContext);
  return (
          <NavigationContainer>
            <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />} screenOptions={{headerShown:false}} >
            {splashLoading ? (

              <Stack.Screen name="Splash" component={Splash} />
              ) : userInfo.token ? (
              <>
               {userInfos.message == "Retrieved successfully" ? (
                <>
              <Stack.Screen name="Accountshootdetails" component={Accountshootdetails} />
              <Stack.Screen name="Payment" component={Payment} />
              </>
               ) : (
              <Stack.Screen name="Meter" component={Meter} />
              )}
              </>
              ) : (
              <>
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
              </>
              )}
            </Tab.Navigator>
          </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  bottomBar: {
    height: 60,
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'row',
    paddingRight:120,
    justifyContent: 'space-around',
  },
  middleIcon: {
    bottom: 18,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    elevation: 8,
  }
});
export default TabNavigator
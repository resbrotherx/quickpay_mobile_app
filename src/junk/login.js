
import React, {useContext} from 'react';
import {View,Text} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login,Meter,Accountshootdetails,Payment} from '../screens'
import {AuthContext} from '../constants/AuthContext';
import Paymentform from '../screens/PaymentForm';

const Stack = createNativeStackNavigator();
const Navigation = ()=>{
  
  const {userInfo, userInfos, splashLoading} = useContext(AuthContext);
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
            {splashLoading ? (

              <Stack.Screen name="Splash" component={Splash} />
              ) : userInfo.token ? (
              <>
              {userInfos.message == "Retrieved successfully" ? (
                <>
              <Stack.Screen name="Accountshootdetails" component={Accountshootdetails} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Paymentform" component={Paymentform} />
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
            </Stack.Navigator>
          </NavigationContainer>
  );
}

export default Navigation













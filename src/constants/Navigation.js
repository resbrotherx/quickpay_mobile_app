import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {Splash,Onboarding,Login,Meter,Accountshootdetails,Payment} from '../screens';
import Paymentform from '../screens/PaymentForm';

const Stack = createNativeStackNavigator();
const Navigation = ()=>{
  
  return (
          <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown:false}} >
              <Stack.Screen name="Splash" component={Splash} />
              <Stack.Screen name="Accountshootdetails" component={Accountshootdetails} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Paymentform" component={Paymentform} />
              <Stack.Screen name="Meter" component={Meter} />
              <Stack.Screen name="Onboarding" component={Onboarding} />
              <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
          </NavigationContainer>
  );
}

export default Navigation


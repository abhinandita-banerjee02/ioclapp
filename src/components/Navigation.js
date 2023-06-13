import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';
import SplashScreen from '../screens/SplashScreen';
import Home from '../screens/Home';
import Login from '../screens/Login';
import BookingConfirmation from '../screens/BookingConfirmation';
import BookByDate from '../screens/BookByDate';
import Available1 from '../screens/Available1';
import Available from '../screens/Available';
import Successful from '../screens/Successful';
import CancelConfirmation from '../screens/CancelConfirmation';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { userInfo, splashLoading } = useContext(AuthContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {splashLoading ? (
          <Stack.Screen
            name="Splash Screen"
            component={SplashScreen}
            options={{ headerShown: false }}
          />
        ) : userInfo.token ? (
          <>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookByDate"
              component={BookByDate}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Available"
              component={Available}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="BookingConfirmation"
              component={BookingConfirmation}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Successful"
              component={Successful}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CancelConfirmation"
              component={CancelConfirmation}
              options={{ headerShown: false }}
            />
          </>
        ) : (
          <>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;


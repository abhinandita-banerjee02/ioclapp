import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Login from './Login';
import Home from './Home';

const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Logout" component={Login} />
    </Drawer.Navigator>
  );
};

export default AppNavigator;

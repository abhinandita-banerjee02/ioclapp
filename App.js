import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



import React, { useState } from "react";
import Navigation from './src/components/Navigation';
import { AuthProvider } from './src/context/AuthContext';





const App = () => {
  return (
    <AuthProvider>
   <Navigation />
   </AuthProvider>
  )
}
export default App;
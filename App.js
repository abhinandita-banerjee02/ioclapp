import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';



//import { AppRegistry } from 'react-native';
//import { Font } from 'expo';

// Import your custom font file
//import KaushanScript from '../../assets/font/KaushanScript-Regular.ttf';


// Register the font
//Font.register({ KaushanScript });

const navigation = createStackNavigator({
  Login: Login,
  Home: Home,
},
{
  initialRouteName: 'Login',
})

export default createAppContainer(navigation);
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import Screen from './src/screens/Screen';
import MyScreen from './src/MyScreen';
import Carousel from './src/screens/Carousel';
import BookByDate from './src/screens/BookByDate';
import Display from './src/screens/Display';
import Successful from './src/screens/Successful';
import BookByFeature from './src/screens/BookByFeature';
import Available from './src/screens/Available';
import BestMatches from './src/screens/BestMatches';
import BookingCancel from './src/screens/BookingCancel';


//import { AppRegistry } from 'react-native';
//import { Font } from 'expo';

// Import your custom font file
//import KaushanScript from '../../assets/font/KaushanScript-Regular.ttf';


// Register the font
//Font.register({ KaushanScript });



export default function App() {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE1CE',
    alignItems: 'center',
   
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 50,
  },
});

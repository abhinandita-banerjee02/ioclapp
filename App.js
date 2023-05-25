import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';
import BookByDate from './src/screens/BookByDate';
import BestMatches from './src/screens/BestMatches';
import Available from './src/screens/Available';
import BookByFeature from './src/screens/BookByFeature';
import BookingCancel from './src/screens/BookingCancel';
import BookingConfirmation from './src/screens/BookingConfirmation';


//import { AppRegistry } from 'react-native';
//import { Font } from 'expo';

// Import your custom font file
//import KaushanScript from '../../assets/font/KaushanScript-Regular.ttf';


// Register the font
//Font.register({ KaushanScript });



export default function App() {
  return (
    <View style={styles.container}>
      <BookingConfirmation />
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

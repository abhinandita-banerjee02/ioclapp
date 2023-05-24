import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/Login';
import Home from './src/screens/Home';


//import { AppRegistry } from 'react-native';
//import { Font } from 'expo';

// Import your custom font file
//import KaushanScript from '../../assets/font/KaushanScript-Regular.ttf';


// Register the font
//Font.register({ KaushanScript });



export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
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

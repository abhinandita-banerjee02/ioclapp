import {
  TextInput,
  View,
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import React, { useState, useContext,createContext } from 'react';
import { AuthContext } from '../context/AuthContext';

//import { AuthContext } from '../context/AuthContext';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
 const {isLoading, login} = useContext(AuthContext);
 

  return (
    <View style={styles.container}>
    <Spinner visible={isLoading} />
      <Text style={styles.headingtext}>Login</Text>

      <Image
        style={styles.image}
        source={require('../../assets/loginMascot.png')}
      />
     
      <Text style={styles.text}>Email</Text>

      <TextInput
        style={styles.input}
        value={email}
        placeholder="Enter text..."
        onChangeText={text => setEmail(text)
        }
      />
      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text..."
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry={true}
      />
      <TouchableOpacity
        title="Submit"
        style={styles.button}
        onPress={() => login(email,password)
        }
      >
        <Text style={styles.btnText} >Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    width: '80%',
    color: '#B93B22',
    textAlign: 'left',
    marginBottom: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    width: '100%',
    backgroundColor: '#FCE1CE',
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 16,
    paddingHorizontal: 8,
    borderRadius: 5,
    backgroundColor: '#FEF6F0',
  },
  button: {
    width: '80%',
    paddingTop: 5,
    paddingBottom: 7,
    borderRadius: 7,
    backgroundColor: '#B93B22',
  },
  btnText: {
    color: 'white',
    textAlign: 'center',
  },
  headingtext: {
    color: '#B93B22',
    fontWeight: 'bold',
    paddingBottom: 5,
    fontSize: 23,
    justifyContent: 'flex-start',
  },
  image: {
    width: 200,
    height: 260,
    resizeMode: 'contain',
    alignContent: 'center',
    justifyContent: 'center',
    marginLeft: 50,
  },
});

export default Login;

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet
} from 'react-native';

// Import the image used in the logo if you have a specific asset
// For example, if you have a logo.png in your assets folder, you would import it like this:
// import logo from './path/to/your/logo.png';


const logo = require('../assets/cleansweep_logotransparent.png');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    scrollView: {
      marginHorizontal: 15,
    },
    contentContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 0,
    },
    input: {
      height: 42,
      width: '95%',
      margin: 12,
      backgroundColor: '#f0fff0', 
      paddingHorizontal: 10, 
      paddingVertical: 8, 
      borderRadius: 5, 
      shadowOffset: { width: 0, height: 2.25 }, 
      shadowOpacity: 0.15, 
      shadowRadius: 3.5, 
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#f0fff0',
      padding: 10,
      width: '95%',
      height: 42, 
      borderRadius: 5, 
      shadowOffset: { width: 0, height: 2.25 }, 
      shadowOpacity: 0.15, 
      shadowRadius: 3.5, 
    },
    buttontext: {
      color: '#454545',
      textAlign: 'center',
    },
    error: {
      fontSize: 14,
      color: 'red', 
    },
    logo: {
      width: 250, 
      height: 100, 
      marginBottom: 0, 
      marginTop: 150,
    }
  });

const Login = ({ navigation }) => {
  const [username, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState('');

  const logon = () => {
    if (username === 'christian' && password === 'rcos') {
      setError('');
      navigation.navigate('eventtest');
    } else {
      setError('user/pass incorrect test');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
          <Image
            source={logo}
            style={styles.logo}
          />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUser}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={setPassword}
            secureTextEntry={true}
            value={password}
          />
          <Text style={styles.error}>{error}</Text>
          <TouchableOpacity onPress={logon} style={styles.button}>
            <Text style={styles.buttontext}>Login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

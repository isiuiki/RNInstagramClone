import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Modal,
  Image,
} from 'react-native';
import Login from '../components/Login';

const LoginScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}
          resizeMode="contain"
        />
      </View>

      <Login navigation={navigation}/>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  inputContainer: {},
  logoContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent: 'center',
  },
  input: {
    borderBottomColor: 'black',
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fafafa',
    borderColor: '#dbdbdb',
    borderRadius: 3,
    marginHorizontal: 20,
  },
  logo: {
    width: 180,
    height: 100,
  },
  forgotPassword: {
    fontWeight: '600',
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 12,
    color: '#0095f6',
  },
  button: {
    backgroundColor: '#0095f6',
    marginHorizontal: 20,
    borderRadius: 3,
    color: '#fff',
    marginTop: 30,
  },
});

export default LoginScreen;

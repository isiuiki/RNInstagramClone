import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Modal,
  Image,
  TouchableOpacity
} from 'react-native';
import * as Keychain from 'react-native-keychain';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [showError, setShowError] = useState(false);

  const login = async () => {
    if (!email || !password) {
      setShowError(true);
    } else {
      await Keychain.setGenericPassword(email, password);
      navigation.navigate('Home');
      setShowError(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Phone number, username or email"
          autoCapitalize="none"
          value={email}
          onChangeText={text => setEmail(text)}
          autoFocus
          borderBottomColor="#dbdbdb"
          placeholderTextColor="#8e8e8e"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={text => setPassword(text)}
          borderBottomColor="#dbdbdb"
          placeholderTextColor="#8e8e8e"
        />
      </View>
      {showError && (
        <Text style={styles.warningMessage}>
          Email/password cannot be empty
        </Text>
      )}

      <Text style={styles.forgotPassword}>Forgot password?</Text>
      <TouchableOpacity style={styles.button} onPress={login}>
        <Text style={styles.text}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
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
    padding: 8,
    alignItems: 'center',
  },
  text:{
      color: '#fff',
      fontWeight: '600'

  },
  warningMessage: {
    color: 'red',
    marginHorizontal: 20,
  },
});

export default Login;

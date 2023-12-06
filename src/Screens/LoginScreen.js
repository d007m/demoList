// Screens/LoginScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Image, StyleSheet, Alert , Platform, KeyboardAvoidingView} from 'react-native';
import { connect } from 'react-redux';
import { login } from '../actions';

const LoginScreen = ({ navigation, dispatch }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

    if (email=='' || password==''){
      Alert.alert('Please fill in all the fields');
      return;
    }

    // Validate email format and password length
    if (!isValidEmail(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }

    if (password && password.length < 8) {
      Alert.alert('Invalid Password', 'Password must be at least 8 characters long.');
      return;
    }

    // Dispatch login action with user information
    dispatch(login({ email, password }));

    // Navigate to Dashboard screen on successful login
    navigation.navigate('Dashboard');
  };

  const isValidEmail = (email) => {
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <KeyboardAvoidingView
      behavior="padding"
      keyboardVerticalOffset={Platform.OS === "ios" ? 150 : 10}
      style={styles.container}
    >
    <Image
          source={require("../assets/login-icon.png")}
          style={{
            width: 170,
            height: 170,
            alignSelf: "center",
            marginBottom: 30,
          }}
      />
    <View style={styles.form}>
    
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: "#f5f5f5",
  },
  form: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: '80%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "bold",
  },
  input: {
    height: 40, 
    borderColor: "#ddd",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10,
    borderRadius: 5,
  },
});

export default connect()(LoginScreen);

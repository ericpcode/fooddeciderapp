import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <TextInput
        label="Email"
        mode="outlined"
        keyboardType="email-address"
        autoCapitalize="none"
        style={styles.input}
      />

      <TextInput
        label="Password"
        mode="outlined"
        secureTextEntry
        style={styles.input}
      />

      <Button
        mode="contained"
        onPress={() => console.log('Logging in...')}
        style={styles.button}
      >
        Login
      </Button>

      <Button onPress={() => navigation.navigate('ForgotPassword')} style={styles.link}>
        Forgot Password?
      </Button>

      <Button onPress={() => navigation.navigate('Signup')} style={styles.link}>
        Don't have an account? Sign up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  input: { marginBottom: 15 },
  button: { marginTop: 10 },
  link: { marginTop: 10 },
});

export default LoginScreen;

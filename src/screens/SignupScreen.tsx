import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useThemeContext } from '../context/ThemeContext';
import AuthHeader from '../components/ui/AuthHeader'; 

const SignupScreen = () => {
  const { theme } = useThemeContext(); 

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AuthHeader title="Sign Up" />

      <View style={[styles.contentContainer, { backgroundColor: theme.colors.background }]}>
        <TextInput
          label="Email"
          mode="outlined"
          style={[styles.input, { backgroundColor: theme.colors.surface }]} 
          theme={{ colors: { primary: theme.colors.primary } }} 
        />
        <TextInput
          label="Password"
          mode="outlined"
          secureTextEntry
          style={[styles.input, { backgroundColor: theme.colors.surface }]}
          theme={{ colors: { primary: theme.colors.primary } }} 
        />
        <TextInput
          label="Confirm Password"
          mode="outlined"
          secureTextEntry
          style={[styles.input, { backgroundColor: theme.colors.surface }]}
          theme={{ colors: { primary: theme.colors.primary } }}
        />
        <Button
          mode="contained"
          onPress={() => console.log('Signing up')}
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
        >
          Create Account
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: {
    flex: 1, 
    justifyContent: 'center',
    padding: 24,
  },
  input: { 
    marginBottom: 15,
  },
  button: { 
    marginTop: 10,
  },
});

export default SignupScreen;

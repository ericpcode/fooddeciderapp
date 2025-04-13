import React from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { useThemeContext } from '../context/ThemeContext';
import AuthHeader from '../components/ui/AuthHeader';

const ForgotPasswordScreen = () => {
  const { theme } = useThemeContext();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <AuthHeader title="Forgot Password" />

      <View style={styles.contentContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          style={[styles.input, { backgroundColor: theme.colors.surface }]}
          theme={{ colors: { primary: theme.colors.primary } }}
        />
        <Button
          mode="contained"
          onPress={() => console.log('Reset link sent')}
          style={[styles.button, { backgroundColor: theme.colors.primary }]}
        >
          Send Reset Link
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
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

export default ForgotPasswordScreen;

import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useThemeContext } from '../context/ThemeContext';

const SettingsScreen = () => {
  const { toggleTheme, isDark, theme } = useThemeContext(); 

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={{ color: theme.colors.primary, marginBottom: 20 }}>
        Theme: {isDark ? 'Dark' : 'Light'}
      </Text>
      <Button mode="contained" onPress={toggleTheme}>
        Toggle Theme
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SettingsScreen;

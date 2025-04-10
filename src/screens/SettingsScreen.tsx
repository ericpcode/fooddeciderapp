import React from 'react';
import { View, StyleSheet, Text, Switch } from 'react-native';
import { useThemeContext } from '../context/ThemeContext';
import SettingsHeader from '../components/settings/SettingsHeader';

const SettingsScreen = () => {
  const { toggleTheme, isDark, theme } = useThemeContext(); 

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <SettingsHeader />

      <View style={styles.contentContainer}>
        <Text style={{ color: theme.colors.primary, marginBottom: 20 }}>
          Theme: {isDark ? 'Dark' : 'Light'}
        </Text>

        <View style={styles.toggleContainer}>
          <Text style={{ color: theme.colors.primary }}>Toggle Theme: </Text>
          <Switch
            value={isDark}
            onValueChange={toggleTheme} 
          />
        </View>
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
    alignItems: 'center',
    padding: 24,
  },
  toggleContainer: {
    flexDirection: 'row', 
    alignItems: 'center',
    marginTop: 20,
  },
});

export default SettingsScreen;

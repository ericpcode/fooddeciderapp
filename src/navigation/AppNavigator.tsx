import React, { useState, useEffect } from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useThemeContext } from '../context/ThemeContext';
import BottomTabs from './TabNavigator';
import AuthScreen from '../screens/AuthScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  const { theme, isDark } = useThemeContext(); 
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <NavigationContainer theme={theme}>
      <StatusBar barStyle={isDark ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <Stack.Screen name="Home" component={BottomTabs} />
        ) : (
          <Stack.Screen name="Auth" component={AuthScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import AppNavigator from './navigation/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';
import { useThemeContext } from './context/ThemeContext';

export default function App() {
  const { theme } = useThemeContext(); 
  return (
    <PaperProvider theme={theme}>
      <ThemeProvider>
        <AppNavigator />
      </ThemeProvider>
    </PaperProvider>
  );
}

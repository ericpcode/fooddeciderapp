import { MD3DarkTheme, MD3LightTheme, MD3Theme } from 'react-native-paper';

export const lightTheme: MD3Theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#4CAF50',
    secondary: '#FFC107',
    background: '#F9F9F9',
    surface: '#FFFFFF',
  },
  roundness: 8,
};

export const darkTheme: MD3Theme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: '#81C784',
    secondary: '#FFD54F',
    background: '#121212',
    surface: '#1F1F1F',
  },
  roundness: 8,
};

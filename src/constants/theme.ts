import {
    MD3DarkTheme as PaperDarkTheme,
    MD3LightTheme as PaperLightTheme,
    MD3Theme,
  } from 'react-native-paper';
  
  export const lightTheme: MD3Theme = {
    ...PaperLightTheme,
    colors: {
      ...PaperLightTheme.colors,
      primary: '#E63946',
      secondary: '#F4A261',
      background: '#FFEDD5',
      surface: '#ffffff',
      surfaceVariant: '#F1EFE9',
      onPrimary: '#ffffff',
      onSecondary: '#000000',
      onSurface: '#2D3142',
      onBackground: '#2D3142',
      outline: '#A8D5BA',
      error: '#B00020',
    },
  };
  
  export const darkTheme: MD3Theme = {
    ...PaperDarkTheme,
    colors: {
      ...PaperDarkTheme.colors,
      primary: '#F4A261',
      secondary: '#A8D5BA',
      background: '#1A202C',
      surface: '#1C1F26',
      surfaceVariant: '#292D36',
      onPrimary: '#000000',
      onSecondary: '#000000',
      onSurface: '#FAF9F6',
      onBackground: '#FAF9F6',
      outline: '#888B96',
      error: '#CF6679',
    },
  };
  
import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { View, Platform, StyleSheet } from 'react-native';
import { useThemeContext } from '../../context/ThemeContext';

interface AuthHeaderProps {
  title: string;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ title }) => {
  const navigation = useNavigation();
  const { theme } = useThemeContext();

  const handleBackAction = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={[styles.headerContainer, { backgroundColor: theme.colors.primary }]}>
      <Appbar.Header style={{ backgroundColor: 'transparent', elevation: 0 }}>
        <Appbar.BackAction onPress={handleBackAction} color={theme.colors.onPrimary} />
        <Appbar.Content title={title} titleStyle={{ color: theme.colors.onPrimary }} />
      </Appbar.Header>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    paddingTop: Platform.OS === 'android' ? 24 : 0,
  },
});

export default AuthHeader;

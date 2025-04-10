import React from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

const SettingsHeader: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      <Appbar.Content title="Settings" titleStyle={{ color: colors.onPrimary }} />
    </Appbar.Header>
  );
};

export default SettingsHeader;

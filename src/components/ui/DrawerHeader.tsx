import React from 'react';
import { Appbar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';
import { useTheme } from 'react-native-paper';

interface DrawerHeaderProps {
  title: string;
  rightActionIcon?: string;
  onRightActionPress?: () => void;
}

const DrawerHeader: React.FC<DrawerHeaderProps> = ({
  title,
  rightActionIcon,
  onRightActionPress,
}) => {
  const navigation = useNavigation();
  const { colors } = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      <Appbar.Action
        icon="menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
        color={colors.onPrimary}
      />
      <Appbar.Content title={title} titleStyle={{ color: colors.onPrimary }} />
      {rightActionIcon && onRightActionPress && (
        <Appbar.Action
          icon={rightActionIcon}
          onPress={onRightActionPress}
          color={colors.onPrimary}
        />
      )}
    </Appbar.Header>
  );
};

export default DrawerHeader;

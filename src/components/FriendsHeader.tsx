import React from 'react';
import { Appbar } from 'react-native-paper';
import { useTheme } from 'react-native-paper';

interface FriendsHeaderProps {
  onAddFriendPress: () => void;
}

const FriendsHeader: React.FC<FriendsHeaderProps> = ({ onAddFriendPress }) => {
  const { colors } = useTheme();

  return (
    <Appbar.Header style={{ backgroundColor: colors.primary }}>
      <Appbar.Content title="Friends List" titleStyle={{ color: colors.onPrimary }} />
      <Appbar.Action
        icon="account-plus"
        onPress={onAddFriendPress}
        color={colors.onPrimary}
      />
    </Appbar.Header>
  );
};

export default FriendsHeader;

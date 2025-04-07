import React from 'react';
import { Appbar } from 'react-native-paper';

interface FriendsHeaderProps {
  onAddFriendPress: () => void;
}

const FriendsHeader: React.FC<FriendsHeaderProps> = ({ onAddFriendPress }) => {
  return (
    <Appbar.Header>
      <Appbar.Content title="Friends List" />
      <Appbar.Action icon="account-plus" onPress={onAddFriendPress} />
    </Appbar.Header>
  );
};

export default FriendsHeader;

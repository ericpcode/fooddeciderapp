import React from 'react';
import DrawerHeader from '../ui/DrawerHeader';

interface FriendsHeaderProps {
  onAddFriendPress: () => void;
}

const FriendsHeader: React.FC<FriendsHeaderProps> = ({ onAddFriendPress }) => {
  return (
    <DrawerHeader
      title="Friends List"
      rightActionIcon="account-plus"
      onRightActionPress={onAddFriendPress}
    />
  );
};

export default FriendsHeader;

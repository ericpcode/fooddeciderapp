import React, { useState, useEffect } from 'react';
import { FlatList, View, Button } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { fetchFriends } from '../services/friendsService';
import AddFriendModal from '../components/AddFriendModal';
import FriendsHeader from '../components/FriendsHeader';

interface Friend {
  id: string;
  name: string;
  email: string;
}

const FriendScreen = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handleAddFriend = (name: string, email: string) => {
    // Add friend logic
    const newFriend = { id: Date.now().toString(), name, email };
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  useEffect(() => {
    // Fetch the initial friends list when the screen is loaded
    fetchFriends().then(setFriends);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Use the header component here */}
      <FriendsHeader onAddFriendPress={() => setModalVisible(true)} />

      {/* Render the list of friends */}
      <FlatList
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card>
            <Card.Title title={item.name} />
            <Card.Content>
              <Text>{item.email}</Text>
            </Card.Content>
          </Card>
        )}
      />

      {/* Add Friend Modal */}
      <AddFriendModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddFriend={handleAddFriend}
      />
    </View>
  );
};

export default FriendScreen;

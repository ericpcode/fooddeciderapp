import React, { useState, useEffect } from 'react';
import { FlatList, View, Button } from 'react-native';
import { Text, Card } from 'react-native-paper';
import { fetchFriends } from '../services/friendsService';
import AddFriendModal from '../components/AddFriendModal';

interface Friend {
  id: string;
  name: string;
  email: string;
}

const HomeScreen = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetchFriends().then(setFriends); 
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Friend" onPress={() => setModalVisible(true)} />
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
      <AddFriendModal visible={modalVisible} onClose={() => setModalVisible(false)} />
    </View>
  );
};

export default HomeScreen;

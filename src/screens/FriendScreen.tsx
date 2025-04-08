import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Text, Card, Avatar } from 'react-native-paper';
import AddFriendModal from '../components/AddFriendModal';
import FriendsHeader from '../components/FriendsHeader';
import { fetchFriends } from '../services/friendsService';
import { useThemeContext } from '../context/ThemeContext'; 

interface Friend {
  id: string;
  name: string;
  email: string;
}

const FriendScreen = () => {
  const [friends, setFriends] = useState<Friend[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const { theme } = useThemeContext(); 

  const handleAddFriend = (name: string, email: string) => {
    const newFriend = { id: Date.now().toString(), name, email };
    setFriends((prevFriends) => [...prevFriends, newFriend]);
  };

  useEffect(() => {
    fetchFriends().then(setFriends);
  }, []);

  const renderItem = ({ item }: { item: Friend }) => (
    <Card style={[styles.card, { backgroundColor: theme.colors.surfaceVariant }]} elevation={3}>
      <Card.Title
        title={item.name}
        titleStyle={[styles.name, { color: theme.colors.onSurface }]}
        subtitle={item.email}
        subtitleStyle={{ color: theme.colors.onSurface }}
        left={() => (
          <Avatar.Text
            label={item.name.charAt(0).toUpperCase()}
            size={40}
            style={{ backgroundColor: theme.colors.primary }}
            color={theme.colors.onPrimary}
          />
        )}
      />
    </Card>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <FriendsHeader onAddFriendPress={() => setModalVisible(true)} />

      <FlatList
        contentContainerStyle={styles.listContent}
        data={friends}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />

      <AddFriendModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddFriend={handleAddFriend}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContent: {
    padding: 16,
  },
  card: {
    marginBottom: 12,
    borderRadius: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default FriendScreen;

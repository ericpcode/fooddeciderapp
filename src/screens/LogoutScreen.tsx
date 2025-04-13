import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import DrawerHeader from '../components/ui/DrawerHeader';

const LogoutScreen = () => {
  const handleLogout = () => {
    console.log('Logging out...');
  };

  return (
    <View style={styles.container}>
      <DrawerHeader title="Logout" />
      <View style={styles.contentWrapper}>
        <Text style={styles.content}>Are you sure you want to logout?</Text>
        <Button mode="contained" onPress={handleLogout} style={styles.button}>
          Confirm Logout
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  content: {
    fontSize: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: '60%',
  },
});

export default LogoutScreen;

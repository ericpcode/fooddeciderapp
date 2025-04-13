import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DrawerHeader from '../components/ui/DrawerHeader';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <DrawerHeader title="Home" />
      <View style={styles.contentWrapper}>
        <Text style={styles.welcomeText}>
          Welcome to the Food Decider App!
        </Text>
        <Text style={styles.subText}>
          Use the drawer to navigate through your settings, friends list, and more.
        </Text>
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
  welcomeText: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    textAlign: 'center',
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});

export default HomeScreen;

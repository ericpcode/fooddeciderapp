import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import DrawerHeader from '../components/ui/DrawerHeader';

const AboutUsScreen = () => {
  return (
    <View style={styles.container}>
      <DrawerHeader title="About Us" />
      <View style={styles.contentWrapper}>
        <Text style={styles.content}>
          This app was created to help users decide what food to eat with their friends. Built with love by the team!
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
  content: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default AboutUsScreen;

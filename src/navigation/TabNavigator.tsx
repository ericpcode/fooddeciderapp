import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import FriendScreen from '../screens/FriendScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        if (route.name === 'Friends') {
          iconName = 'people';
        } else if (route.name === 'Settings') {
          iconName = 'settings';
        }
        return <Icon name={iconName!} size={size} color={color} />;
      },
      tabBarStyle: {
        backgroundColor: '#F1EFE9',
      },
    })}
  >
    <Tab.Screen
      name="Friends"
      component={FriendScreen}
      options={{
        headerShown: false, 
      }}
    />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={{
        headerShown: false,
      }}
    />
  </Tab.Navigator>
);

export default BottomTabs;

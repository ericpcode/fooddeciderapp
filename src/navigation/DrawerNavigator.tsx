import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './TabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="MainTabs" component={BottomTabs} />
      {/* Add more Drawer items here if needed, like a Profile, About, etc */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

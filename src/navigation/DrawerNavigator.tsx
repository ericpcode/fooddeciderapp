import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './TabNavigator';
import AboutUsScreen from '../screens/AboutUsScreen';
import LogoutScreen from '../screens/LogoutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={BottomTabs} />
      {/* <Drawer.Screen name="MainTabs" component={BottomTabs} /> */}
      <Drawer.Screen name="About Us" component={AboutUsScreen} />
      <Drawer.Screen name="Logout" component={LogoutScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

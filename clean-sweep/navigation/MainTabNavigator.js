import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../pages/Homepage';
import Events from '../pages/EventPage';
// import Reports from '../pages/Reports';
import Profile from '../pages/ProfilePage';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator initialRouteName="Home">

      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Home" component={Homepage} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;

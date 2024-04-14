import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Homepage from '../pages/Homepage';
import Events from '../pages/EventPage';
import Profile from '../pages/ProfilePage';

const Tab = createMaterialTopTabNavigator();

function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          let IconComponent = MaterialIcons; // Default icon set
          let iconSize = 30; // Adjust icon size here

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            IconComponent = MaterialCommunityIcons; // Use MaterialCommunityIcons for Home
          } else if (route.name === 'Events') {
            iconName = focused ? 'event' : 'event-available';
            IconComponent = MaterialIcons; // Use MaterialIcons for Events
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            IconComponent = MaterialIcons; // Use MaterialIcons for Profile
          }

          // Return the appropriate icon component
          return <IconComponent name={iconName} size={iconSize} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        swipeEnabled: true,
        tabBarShowLabel: true,
        tabBarShowIcon: true,
        tabBarIconStyle: { width: 40, height: 40 }, // Adjust width and height as needed
        tabBarStyle: { backgroundColor: '#fff' },
      })}
      tabBarPosition="bottom"
    >
      <Tab.Screen name="Events" component={Events} options={{ tabBarLabel: 'Events' }} />
      <Tab.Screen name="Home" component={Homepage} options={{ tabBarLabel: 'Home' }} />
      <Tab.Screen name="Profile" component={Profile} options={{ tabBarLabel: 'Profile' }} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;

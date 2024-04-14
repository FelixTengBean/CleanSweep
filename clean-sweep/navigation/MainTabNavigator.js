import React from 'react';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homepage from '../pages/Homepage';
import Events from '../pages/EventPage';
// import Reports from '../pages/Reports';
import Profile from '../pages/ProfilePage';

const Tab = createBottomTabNavigator();


function MainTabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = MaterialIcons; // Default icon set

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
          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4CAF50',
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: { display: 'flex' },
      })}
    >
      {/* Place the Events tab */}
      <Tab.Screen name="Events" component={Events} />
      {/* Set the Homepage as the initial route and in the center */}
      <Tab.Screen name="Home" component={Homepage} />
      {/* Profile tab */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default MainTabNavigator;
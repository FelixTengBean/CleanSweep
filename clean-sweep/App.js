// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainPage from './pages/MainPage';
import LocationConfirmationPage from './pages/LocationConfirmationPage';

import { StyleSheet, View } from 'react-native';
import ReportPage from './pages/ReportPage';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainPage">
        <Stack.Screen name="MainPage" component={MainPage} options={{ title: 'Report an Issue' }} />
        <Stack.Screen name="LocationConfirmationPage" component={LocationConfirmationPage} options={{ title: 'Confirm Location' }} />
        {/* Add more screens for additional steps */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;

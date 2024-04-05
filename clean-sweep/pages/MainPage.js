// MainPage.js

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Make a Report</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LocationConfirmationPage')}>
        <Text style={styles.buttonText}>Proceed to Report</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccffcc',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 18,
  },
});

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { useState, useEffect } from 'react';

const useTypingEffect = (text, typingSpeed = 150) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(intervalId);
    }, typingSpeed);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [text, typingSpeed]);

  return displayedText;
};

const Homepage = ({ userName }) => {
  // Example quote, you can dynamically change this based on an API or local data.
  const quote = "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi";
  const displayedQuote = useTypingEffect(quote, 50)
    
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome back, {userName}!</Text>
      <Text style={styles.quoteText}>{displayedQuote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
  }
});

export default Homepage;
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

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
  const quote = "The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi";
  const displayedQuote = useTypingEffect(quote, 50);
    
  return (
    <View style={styles.container}>
      <View style={styles.banner}>
        <Image
          source={require('../assets/cleansweep_logotransparent.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.welcomeText}>Welcome back, {userName}!</Text>
      <Text style={styles.quoteText}>{displayedQuote}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
    paddingTop: 0, // Ensuring the banner sticks to the top
    backgroundColor: '#f5f5f5',
  },
  banner: {
    width: '100%', // Full width
    height: 200, // Increased height for a larger banner
    alignItems: 'center', // Centering the logo horizontally
    justifyContent: 'center', // Centering the logo vertically
    marginBottom: 30, // Space between the banner and the welcome text
  },
  logo: {
    height: '100%', // Making the logo fill the banner vertically
    width: '100%', // You can adjust this if you want to maintain the aspect ratio
    alignSelf: 'center', // Ensuring the logo is centered within the banner space
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4CAF50', // Text color from the logo
  },
  quoteText: {
    fontSize: 16,
    fontStyle: 'italic',
    textAlign: 'center',
    color: '#4CAF50', // Text color from the logo
  }
});

export default Homepage;


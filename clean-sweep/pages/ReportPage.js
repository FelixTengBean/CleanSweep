import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Button, TextInput, ActivityIndicator, Alert } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';

export default function ReportPage() {
  const [location, setLocation] = useState(null);
  const [tags, setTags] = useState([]);
  const [customMessType, setCustomMessType] = useState('');
  const [isCustomMessTypeVisible, setIsCustomMessTypeVisible] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          throw new Error('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
      } catch (error) {
        setErrorMsg(error.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const handleTagSelection = (type) => {
    if (type === 'Other') {
      setIsCustomMessTypeVisible(true);
    } else {
      setIsCustomMessTypeVisible(false);
      if (!tags.includes(type)) {
        setTags([...tags, type]);
      }
    }
  };

  const handleCustomTagSubmit = () => {
    if (customMessType.trim() !== '' && !tags.includes(customMessType)) {
      setTags([...tags, customMessType]);
      setCustomMessType('');
      setIsCustomMessTypeVisible(false);
    } else {
      Alert.alert('Invalid Input', 'Please enter a valid custom tag.');
    }
  };

  const removeTag = (index) => {
    setTags(tags.filter((_, idx) => idx !== index));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Report an Issue</Text>
      {loading ? (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Waiting for permission...</Text>
          <ActivityIndicator size="large" color="#006400" style={styles.activityIndicator} />
        </View>
      ) : errorMsg ? (
        <Text style={styles.errorText}>{errorMsg}</Text>
      ) : (
        <>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: location.latitude,
              longitude: location.longitude,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
          >
            <Marker
              coordinate={{ latitude: location.latitude, longitude: location.longitude }}
              title="Report Location"
            />
          </MapView>
          <View style={styles.tagBox}>
            <View style={styles.tagContainer}>
              {tags.map((tag, index) => (
                <TouchableOpacity key={index} style={styles.tag} onPress={() => removeTag(index)}>
                  <Text style={styles.tagText}>{tag}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View style={styles.buttonContainer}>
            {['Trash Pickup', 'Pollution', 'Other'].map((type) => (
              <TouchableOpacity key={type} style={styles.button} onPress={() => handleTagSelection(type)}>
                <Text style={styles.buttonText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </View>
          {isCustomMessTypeVisible && (
            <>
              <TextInput
                style={styles.input}
                onChangeText={setCustomMessType}
                value={customMessType}
                placeholder="Enter custom tag"
              />
              <Button title="Add Tag" onPress={handleCustomTagSubmit} />
            </>
          )}
        </>
      )}
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
  map: {
    width: Dimensions.get('window').width - 50,
    height: Dimensions.get('window').width - 50,
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    marginHorizontal: 5,
    marginBottom: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#ffffff',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: '80%',
    borderRadius: 10,
    borderColor: '#007bff',
    backgroundColor: '#ffffff',
  },
  tagBox: {
    borderWidth: 1,
    borderColor: '#007bff',
    padding: 5,
    borderRadius: 5,
    marginTop: 20,
    backgroundColor: '#ffffff',
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  tag: {
    backgroundColor: '#007bff',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    margin: 5,
  },
  tagText: {
    color: '#ffffff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    color: '#000',
  },
  loadingContainer: {
    alignItems: 'center',
  },
  loadingText: {
    marginBottom: 30, // Increased space
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    fontSize: 16,
    marginVertical: 20,
  },
  activityIndicator: {
    // Adjustments can be made here if needed
  },
});

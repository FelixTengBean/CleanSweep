import React, {useState}from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView, StatusBar, TouchableOpacity, Image } from 'react-native';

const pfp = require('../assets/cleansweep_logo.jpg');
const ProfilePage = ({helpedhours}) => {
  const achieved = [
    { id: 1, name: 'made account', recieved: true},
    { id: 2, name: '69 hours helped', recieved: false},
    ];
  const settings = [
    { id: 1, setting: 'colorblind mode', on: false},
    { id: 2, setting: 'banner notis', on: true},  
    ];
  const [display1, Achivementstf] = useState(false);
  const [display2, Settingstf] = useState(false);
  const achievementsonoff = () => {
    Achivementstf(!display1); //opposite so can toggle
  };
  const settingsonoff = () => {
    Settingstf(!display2); //opposite
  };
  const showachievements = () => { //display for achievements color logic expanding on this later
    if(display1) {
      return (
        <View>
          {achieved.map(achievements => {
            let color;
            if (achievements.recieved == true) {
              color = 'green';
            } 
            else {
              color = 'red';
            }    
            return (
              <Text key={achievements.id} style={{ color: color }}>{achievements.name}</Text>
            );
          })}
        </View>
      );
    } 
    else {
      return null;
    }
  }
  const showsettings = () => { //display for settings color logic expanding on this later (can change setting directly here and color will change based on that is what i want to implement)
    if(display2) {
      return (
        <View>
          {settings.map(settings => {
            let color;
            if (settings.on == true) {
              color = 'green';
            } 
            else {
              color = 'red';
            }    
            return (
              <Text key={settings.id} style={{ color: color }}>{settings.setting}</Text>
            );
          })}
        </View>
      );
    } 
    else {
      return null;
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        <View style={styles.contentContainer}>
         <Image
              style={styles.profilepic}
              source={pfp}
            />
          <TouchableOpacity onPress={achievementsonoff}>
            <Text>achievements</Text>
          </TouchableOpacity>
            {showachievements()}
          <TouchableOpacity onPress={settingsonoff}>
            <Text>settings</Text>
          </TouchableOpacity>
            {showsettings()}
          <TouchableOpacity>
            <Text>privacy settings</Text> 
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>💚hours Helped: {helpedhours}</Text> 
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    marginHorizontal: 15,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  profilepic: {
    marginTop: 30,
    marginBottom: 25,
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});

export default ProfilePage;

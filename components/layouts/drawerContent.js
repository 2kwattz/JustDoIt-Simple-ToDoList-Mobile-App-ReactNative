import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DrawerContent = ({ navigation }) => {
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigateToScreen('Home')}>
        <Text style={styles.link}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Profile')}>
        <Text style={styles.link}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('Settings')}>
        <Text style={styles.link}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigateToScreen('About')}>
        <Text style={styles.link}>About</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
  
  },
  link: {
    fontSize: 18,
    marginBottom: 20,
    color: '#000',
  },
});

export default DrawerContent;

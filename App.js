import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// StyleSheets

import globalStyles from './styles/globalStyles';
import Colors from './styles/colors';
import fonts from './styles/fonts';

// Components

import Header from './components/layouts/Header';
import Form from './components/layouts/Form';
import Section from './components/layouts/Section';
import Navigation from './components/layouts/Navigation';
const Stack = createNativeStackNavigator();
export default function App() {
  return (

    <React.Fragment>
        <Header />
        <Form/>
        <Navigation />
        
      <NavigationContainer>

        <Stack.Screen name="Home" component={Form} />
        
    
      </NavigationContainer>

    </React.Fragment>
  );
}

import React, { useState } from 'react' 
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/native-stack';

// StyleSheets

import globalStyles from './styles/globalStyles';
import Colors from './styles/colors';
import fonts from './styles/fonts';

// Components

import Header from './components/layouts/Header';
import Form from './components/layouts/Form';
import Section from './components/layouts/Section';
import Navigation from './components/layouts/Navigation';
import Shipped from './components/layouts/Shipped';

export default function App() {

  const [activeTab, setActiveTab] = useState('Form');

  const renderTab = () => {
    switch (activeTab) {
      case 'Form':
        return <Form />;
      case 'Shipped':
        return <Shipped/>
      default:
        return null;
    }
  };

  return (

    <React.Fragment>
      <Header setActiveTab={setActiveTab} />
      {renderTab()}
      <Navigation />


    </React.Fragment>
  );
}

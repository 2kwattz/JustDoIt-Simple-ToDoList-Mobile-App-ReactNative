import 'react-native-gesture-handler';
import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DashboardScreen from './screens/DashboardScreen'
import ToDoNavbar from './components/layouts/todo';
import ToDoContainer from './components/layouts/todoContainer';
import ToDoList from './components/layouts/todoList'

import CustomDrawerContent from './components/elements/drawer';

const Drawer = createDrawerNavigator()

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
import DrawerContent from './components/layouts/drawerContent';
import State from './components/layouts/statesEg';

export default function App() {

  const [activeTab, setActiveTab] = useState('Form');
  // const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  // const handleToggleDrawer = () => {
  //     setIsDrawerVisible(!isDrawerVisible);
  // };

  ;



  const renderTab = () => {
    switch (activeTab) {
      case 'Form':
        { isDrawerVisible && <drawerContent onClose={() => setIsDrawerVisible(false)} /> }
        return <Form />;
      case 'Shipped':
        return <Shipped />
      default:
        return null;
    }
  };

  return (

    <React.Fragment>
      <SafeAreaView>



      <ToDoNavbar />
      <ToDoContainer />
      <ToDoList />
      {/* <NavigationContainer>
        <Drawer.Navigator
          drawerContent={(props) => <DrawerContent {...props} />}
          drawerStyle={{ width: 200 }}
          drawerType={'slide'}
          overlayColor='transparent'
          initialRouteName='Dashboard'
          edgeWidth={0}
          drawerPosition="right" 
        >
          <Drawer.Screen name='Dashboard' component={DashboardScreen}
          options={{ title: '', headerShown: false }} 
           />
        </Drawer.Navigator>
      </NavigationContainer>
      {renderTab()}
       */}


</SafeAreaView>
    </React.Fragment>
  );
}

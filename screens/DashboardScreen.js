import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';




// StyleSheets


import Colors from '../styles/colors';
import fonts from '../styles/fonts';

// Components

import Header from '../components/layouts/Header';
import Form from '../components/layouts/Form';
import Section from '../components/layouts/Section';
import Navigation from '../components/layouts/Navigation';
import Shipped from '../components/layouts/Shipped';
import DrawerContent from '../components/layouts/drawerContent';
import State from '../components/layouts/statesEg';

const DashboardScreen = () =>{
    const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    const toggleDrawer = () => {
        setIsDrawerVisible(!isDrawerVisible);
      };
     
    return (
        <React.Fragment>
        <Header toggleDrawer={toggleDrawer} isDrawerVisible={isDrawerVisible} /> 
        {/* <Form/> */}
        {isDrawerVisible && <DrawerContent onClose={function(){
            const [animation] = useState(new Animated.Value(-300)); // Initial position outside the screen
            const animateDrawer = () => {
              Animated.timing(animation, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setIsDrawerVisible(false)
            }

            
        }} />}

    </React.Fragment>
    )
}


export default DashboardScreen


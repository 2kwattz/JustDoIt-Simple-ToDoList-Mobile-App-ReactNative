import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';
import LogoImage from '../../assets/todo/todoList.png'
// StyleSheets

import Colors from '../../styles/colors';

const ToDoNavbar = () =>{


    return (

        <View style={ToDoNavbarStyles.container}>
            
            <Image source={LogoImage} style={ToDoNavbarStyles.logo}></Image>

        </View>

    )
}



const ToDoNavbarStyles = StyleSheet.create({

    container:{
        width: '100%',
        padding: 25,
        backgroundColor: Colors.greenPrimary,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    logo:{
        marginTop: 20,

    },



})

export default ToDoNavbar
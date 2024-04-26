import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image, DatePickerAndroid } from 'react-native';
import LogoImage from '../../assets/todo/todoList.png'
// StyleSheets

import Colors from '../../styles/colors';

const ToDoList = () =>{

    let tasks = []


    return (


    <View style={ToDoListStyles.container}>
        <View style={ToDoListStyles.listItem}><View>
        <Text> Task 1 </Text>
            </View>
        <TouchableOpacity style={ToDoListStyles.btn}><Text style={ToDoListStyles.btnText}> Delete Task</Text></TouchableOpacity>
        
        </View>

    </View>

    )
}

const ToDoListStyles = StyleSheet.create({
    container:{
        paddingTop: 0,
        padding: 30,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },
    
    listItem:{
        borderWidth: 1,
        borderColor: Colors.lightGreyPrimary,
        paddingVertical: 20,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
   
    },

    btn:{
        padding: 10,
        backgroundColor: '#D2042D',
    },

    btnText:{
        color: Colors.whitePrimary,
    },

})

export default ToDoList
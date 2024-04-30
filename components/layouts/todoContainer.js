import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image, DatePickerAndroid } from 'react-native';
import LogoImage from '../../assets/todo/todoList.png'
import SQLite from 'react-native-sqlite-storage';
// StyleSheets

import Colors from '../../styles/colors';

const Settings = () =>{

    const [taskMessage, SetTaskMessage] = useState('')
    const [ToDoListData, SetToDoListData] = useState([])

    // console.log(taskMessage)

    function saveTask(){
        SetToDoListData(...taskMessage, {id: Date.now().toString(), task: taskMessage })
    }

   
    return (
        <React.Fragment>
            <View style={ToDoContainerStyles.container}>
                <Text style={ToDoContainerStyles.subheading}> Settings </Text>

                <View style={ToDoContainerStyles.form}>
                    <TextInput style={ToDoContainerStyles.inputText} value={taskMessage} onChangeText={
                        function(text){
                            SetTaskMessage(text)
                           
                        }
                    } placeholder="Enter your tasks"></TextInput>
                    <TouchableOpacity style={ToDoContainerStyles.btn} onPress={saveTask}><Text style={ToDoContainerStyles.btnText}> Add Task </Text></TouchableOpacity>
                    
                </View>
            </View>


        </React.Fragment>
    )
}

const ToDoContainerStyles = StyleSheet.create({

    container:{
       
        padding: 40,
    },

    subheading:{
            textAlign: 'center',
            fontSize: 14,
            fontWeight: '600',
    },

    inputText:{
        
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 20,
        backgroundColor: Colors.lightGreyPrimary,
    },

    btn:{
        padding: 10,
        backgroundColor: Colors.greenMed,
        width: 100,
    },

    btnText:{
        color: Colors.whitePrimary,
    }







})

export default Settings
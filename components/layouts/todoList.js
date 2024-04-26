import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image, DatePickerAndroid, FlatList } from 'react-native';
import LogoImage from '../../assets/todo/todoList.png'
// StyleSheets

import Colors from '../../styles/colors';


const ToDoList = ({ taskMessage, ToDoListData }) => {
    console.log(ToDoListData)



    // console.log(renderToDo.taskMessage)
    let tasks = [
        {
            task: "Eat Burger",
        },
    ];

    function renderToDo(item) {


        ToDoListData = ["Hello"]
        console.log(ToDoListData)
        console.log(item)
        return (
            <View style={ToDoListStyles.listItem}><View>
                <Text> {item} </Text>
            </View>
                <TouchableOpacity style={ToDoListStyles.btn}><Text style={ToDoListStyles.btnText}> Delete Task</Text></TouchableOpacity>

            </View>
        )
    }


    return (


        <View style={ToDoListStyles.container}>
            <FlatList data={ToDoListData} renderItem={renderToDo} />




        </View>

    )
}

const ToDoListStyles = StyleSheet.create({
    container: {
        paddingTop: 0,
        padding: 30,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    },

    listItem: {
        borderWidth: 1,
        borderColor: Colors.lightGreyPrimary,
        paddingVertical: 20,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',

    },

    btn: {
        padding: 10,
        backgroundColor: '#D2042D',
    },

    btnText: {
        color: Colors.whitePrimary,
    },

})

export default ToDoList
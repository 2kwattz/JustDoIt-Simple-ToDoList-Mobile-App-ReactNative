import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, FlatList, Button, Image } from 'react-native';
import LogoImage from '../../assets/todo/todoList.png'
// StyleSheets

import Colors from '../../styles/colors';

const ToDoNavbar = () => {

    const [taskMessage, SetTaskMessage] = useState('')
    const [storedTask, SetStoredTask] = useState([])

    function saveTask() {

        const storedTaskData = [...storedTask, { id: Date.now().toString(), task: taskMessage }]
        SetStoredTask(storedTaskData)
        console.log(storedTaskData)
    }
    return (
        <>
            <View style={ToDoNavbarStyles.container}>

                <Image source={LogoImage} style={ToDoNavbarStyles.logo}></Image>

            </View>

            <View style={ToDoContainerStyles.container}>
                <Text style={ToDoContainerStyles.subheading}> Enter your day to day life tasks </Text>

                <View style={ToDoContainerStyles.form}>
                    <TextInput style={ToDoContainerStyles.inputText} onChangeText={(text) => {
                        SetTaskMessage(text)
                    }}

                        placeholder="Enter your tasks"></TextInput>
                    <Text>
                    </Text>
                    <TouchableOpacity style={ToDoContainerStyles.btn} onPress={saveTask}><Text style={ToDoContainerStyles.btnText}> Add Task </Text></TouchableOpacity>

                </View>
            </View>
            <View style={ToDoListStyles.container}>

                {
                    storedTask.map(function (item) {
                        return (
                            <ScrollView>

                            <View key={item.id} style={ToDoListStyles.listItem}><View>
                                <Text> {item.task} </Text>
                            </View>
                                <TouchableOpacity style={ToDoListStyles.btn}><Text style={ToDoListStyles.btnText}> Delete Task</Text></TouchableOpacity>

                            </View>
                            </ScrollView>
                        )
                    })
                }
            </View>
        </>

    )
}



const ToDoContainerStyles = StyleSheet.create({

    container: {

        padding: 40,
    },

    subheading: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '600',
    },

    inputText: {

        paddingHorizontal: 15,
        paddingVertical: 5,
        marginVertical: 20,
        backgroundColor: Colors.lightGreyPrimary,
    },

    btn: {
        padding: 10,
        backgroundColor: Colors.greenMed,
        width: 100,
    },

    btnText: {
        color: Colors.whitePrimary,
    }
})

const ToDoListStyles = StyleSheet.create({
    container: {
        paddingTop: 0,
        padding: 30,
        flex: 0,
        flexDirection: 'column',
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
        // width: '100%',
        margin: 10,

    },

    btn: {
        padding: 10,
        backgroundColor: '#D2042D',
    },

    btnText: {
        color: Colors.whitePrimary,
    },

})

const ToDoNavbarStyles = StyleSheet.create({

    container: {
        width: '100%',
        padding: 25,
        backgroundColor: Colors.greenPrimary,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
    },

    logo: {
        marginTop: 20,

    },



})

export default ToDoNavbar
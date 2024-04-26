import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';

const State = (props) =>{

    
            const [count, SetCount] = useState(0)

            function handelIncrement(){
                SetCount(count + 1)
            }

            function handelDecrement(){
                SetCount(count - 1)
            }


    return (
        <React.Fragment>
            <View style={stateStyles.container}>
                <Text style={stateStyles.text}>F18 Loadout {props.name} </Text>

                <Text> Missiles available  {count}</Text>

                <TouchableOpacity style={stateStyles.button} onPress={handelIncrement}><Text> Add Sidewinder  </Text></TouchableOpacity>
                <TouchableOpacity style={stateStyles.button} onPress={handelDecrement}><Text> Shoot Sidewinder  </Text></TouchableOpacity>

            </View>
        </React.Fragment>
    )
}

const stateStyles = StyleSheet.create({

    container:{
        flex: 0,
        flexDirection: 'column',
        padding: 30,
        margin: 20,
        paddingVertical: 80,
    
    },

    button:{
        backgroundColor: 'lightblue',
        padding: 10,
        borderRadius: 30,
    },

    text:{
        fontSize: 30,
    },
})

export default State


import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';

// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Components

import Input from '../../components/elements/input';

const Header = () => {

    const arrowButtonImage = require('../../assets/Header/arrow-left.png')
    const notificationBellImage = require('../../assets/Header/notification.png')

    return (
        <View style={HeaderStyles.body}>
            <View style={HeaderStyles.headerParent}>
                <View style={HeaderStyles.headerItems}>
                    <Image source={arrowButtonImage} style={{height: 30,}}>

                    </Image>
                </View>

                <View style={HeaderStyles.headerItems}>
                    <Text style={HeaderStyles.heading}> Physician Orders </Text>
                </View>

                <View style={HeaderStyles.headerItems}>
                <Image source={notificationBellImage} style={HeaderStyles.headerImages}>

</Image>
                </View>

            </View>

        </View>
    )

}

const HeaderStyles = StyleSheet.create({

    body: {
        marginTop: '20%',
    },

    headerParent:{
       
        padding: 20,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'middle',
    },

    headerImages:{
        height: 50,
        
    },

    heading:{
        fontSize: 20,
        fontWeight: '600',
        color: Colors.blackPrimary,

    },

    headerItems:{
        verticalAlign: 'middle',
    }

})

export default Header
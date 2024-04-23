import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, Image, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Components

import Components from '../../styles/components';

const HomeImage = require('../../assets/Navigation/home.png')
const MessageImage = require('../../assets/Navigation/message.png')
const ProfileImage = require('../../assets/Navigation/profile.png')
const BookImage = require('../../assets/Navigation/book.png')



const Navigation = () => {

    return (

        <React.Fragment>

            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : null}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}>

                <View style={NavigationStyles.NavContainer}>

                    <View style={NavigationStyles.NavContainerItem}>
                        <Image source={HomeImage} style={NavigationStyles.NavImages} />


                        <Text style={NavigationStyles.NavContainerText}>
                            Home
                        </Text>
                    </View>

                    <View style={NavigationStyles.NavContainerItem}>
                        <Image source={BookImage} style={NavigationStyles.NavImages} />

                        <Text style={NavigationStyles.NavContainerText}>
                            Orders
                        </Text>
                    </View>

                    <View style={NavigationStyles.NavContainerItem}>
                        <Image source={MessageImage} style={NavigationStyles.NavImages} />


                        <Text style={NavigationStyles.NavContainerText}>
                            Chat
                        </Text>
                    </View>

                    <View style={NavigationStyles.NavContainerItem}>
                        <Image source={ProfileImage} style={NavigationStyles.NavImages} />


                        <Text style={NavigationStyles.NavContainerText}>
                            Accounts
                        </Text>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </React.Fragment>

    )
}


const NavigationStyles = StyleSheet.create({

    NavContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderColor: Colors.greySecondary,
        borderWidth: 1,
        paddingVertical: 10,
        backgroundColor: 'white',



    },

    NavContainerItem: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',

    },

    NavContainerText: {
        color: Colors.greyPrimary,
    },

    horizontalLine: {
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,

    },

    NavImages: {
        height: 30,
        objectFit: 'contain',
    },

})

export default Navigation
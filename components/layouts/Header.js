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

        <React.Fragment>

            {/* Header Section */}

            <View style={HeaderStyles.body}>
                <View style={HeaderStyles.headerParent}>
                    <View style={HeaderStyles.headerItems}>
                        <Image source={arrowButtonImage} style={{ height: 30, marginLeft: 14 }}>

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

            {/* Navigation Menu Section */}

            <View style={HeaderStyles.navigationMenu}>

                {/* <View style={[HeaderStyles.navigationItems, HeaderStyles.navigationActiveItem]}>
                    <Text style={HeaderStyles.navigationItemTextActive}> New <Text style={[HeaderStyles.activeNotifications,HeaderStyles.navigationItemTextActive]}>
                        3
                    </Text> </Text>
                </View> */}

                <View style={[HeaderStyles.navigationItems, HeaderStyles.navigationActiveItem]}>
                    <Text style={HeaderStyles.navigationItemTextActive}> New </Text><View style={HeaderStyles.activeNotifications}><Text style={HeaderStyles.innertextActive}>
                        3
                    </Text></View>
                </View>

                <View style={HeaderStyles.navigationItems}>
                    <Text style={HeaderStyles.navigationItemText}> Fulfilled  <Text style={HeaderStyles.Notifications}> 6 </Text>  </Text>
                </View>

                <View style={HeaderStyles.navigationItems}>
                    <Text style={HeaderStyles.navigationItemText}> Cancelled  <Text style={HeaderStyles.Notifications}> 2 </Text> </Text>
                </View>


            </View>

            <View style={HeaderStyles.horizontalLine}></View>

        </React.Fragment>
    )

}

const HeaderStyles = StyleSheet.create({

    body: {
        marginTop: '15%',
    },

    headerParent: {

        padding: 20,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        verticalAlign: 'middle',
        width: '100%',
        textAlign: 'center',
    },

    headerImages: {
        objectFit: 'contain',
        width: 50,


    },

    heading: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.blackPrimary,
        textAlign: 'center',

    },

    headerItems: {
        verticalAlign: 'middle',
    },

    navigationMenu: {
        flex: 0,
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
    },

    navigationItems: {
        borderRadius: 20,
        marginVertical: 4,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        
    },

    navigationItemText: {
        padding: 10,
        fontWeight: '700',
        color: Colors.greyPrimary,

    },

    navigationActiveItem: {
        backgroundColor: Colors.blueSecondary,
        


    },

    navigationItemTextActive: {
        color: Colors.bluePrimary,
        padding: 10,
        fontWeight: '700',

    },

    innertextActive: {
        fontWeight: '700',
        color: Colors.bluePrimary,
        paddingVertical: 1,
        paddingHorizontal: 9,
        borderRadius: 50,
    },

    // Notifications

    activeNotifications: {
        backgroundColor: 'rgba(28, 170, 212, 0.09)',
        borderRadius: 30,
        padding: 2,
        margin:10,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
    },

    Notifications: {
        backgroundColor: Colors.greySecondary,
    },

    // Horizontal Line

    horizontalLine: {
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,

    },



})

export default Header
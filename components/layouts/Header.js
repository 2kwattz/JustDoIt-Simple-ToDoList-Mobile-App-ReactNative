import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';
// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Components

import Components from '../../styles/components';

const Header = () => {

    const arrowButtonImage = require('../../assets/Header/arrow-left.png')
    const notificationBellImage = require('../../assets/Header/notification.png')
    const searchImage = require('../../assets/Header/search.png')
    const filtersImage = require('../../assets/Header/filters.png')

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

                {/* <View style={HeaderStyles.navigationItems}>
                    <Text style={HeaderStyles.navigationItemText}> Fulfilled  <Text style={HeaderStyles.Notifications}> 6 </Text>  </Text>
                </View> */}

                <View style={HeaderStyles.navigationItems}>
                    <Text style={HeaderStyles.navigationItemText}> Fulfilled  <Text style={HeaderStyles.Notifications}> 6 </Text>  </Text>
                </View>

                {/* <View style={HeaderStyles.navigationItems}>
                    <Text style={HeaderStyles.navigationItem}> Fulfilled </Text><View style={HeaderStyles.Notifications}><Text style={HeaderStyles.innertext}>
                        3
                    </Text></View>
                </View> */}


                <View style={HeaderStyles.navigationItems}>
                    <Text style={HeaderStyles.navigationItemText}> Cancelled  <Text style={HeaderStyles.Notifications}> 2 </Text> </Text>
                </View>


            </View>

            <View style={HeaderStyles.horizontalLine}></View>

            <View style={HeaderStyles.searchSection}>
                <Image source={searchImage} style={[HeaderStyles.searchImage, { position: 'absolute', left: '9%' },]}>

                </Image>
                <TextInput style={Components.SearchInput}
                    placeholder="        Search by Order Id, Device Name " />

                <View style={HeaderStyles.filters}>
                    <Image source={filtersImage} style={filtersImage} />
                </View>
            </View>



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
        borderRadius: 50,
        marginVertical: 4,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',

    },

    navigationItemText: {
        padding: 10,
        fontWeight: '700',
        fontSize: 15,
        color: Colors.subheading,

    },

    navigationActiveItem: {
        backgroundColor: Colors.blueSecondary,
    },

    navigationItemTextActive: {
        color: Colors.bluePrimary,
        paddingHorizontal: 7,
        fontWeight: '700',

    },

    innertextActive: {
        fontWeight: '700',
        color: Colors.bluePrimary,
        paddingHorizontal: 7,
        borderRadius: 90,
    },

    innertext: {
        fontWeight: '700',
        color: Colors.greenPrimary,
        paddingVertical: 1,
        paddingHorizontal: 9,
        borderRadius: 50,
    },

    // Notifications

    activeNotifications: {
        backgroundColor: 'rgba(28, 170, 212, 0.09)',
        borderRadius: 40,
        padding: 2,
        margin: 10,
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

    // Search Section

    searchSection: {
        
        marginVertical: 35,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        position: 'relative',
    },

    searchImage: {
        marginRight: 40,
    },

    // Filters

    filters: {
        borderRadius: 30,
    },
    filtersImage: {
        objectFit: 'contain',
        height: 145,
    }

})

export default Header
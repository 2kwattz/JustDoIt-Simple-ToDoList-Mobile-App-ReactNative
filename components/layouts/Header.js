import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { DrawerActions } from '@react-navigation/native';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';
// import { useFonts } from "expo-font";
// import drawerContent from '../components/layouts/drawerContent';
import { Manrope_400Regular, Manrope_500Medium, Manrope_700Bold } from '@expo-google-fonts/manrope';

import Form from './Form'
import Shipped from './Shipped';
// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
// import Fonts from '../../assets/Fonts'
import { useFonts } from 'expo-font';

// Components
import SearchInput from '../elements/SearchInput';

import { createDrawerNavigator } from '@react-navigation/drawer';


const Header = ({ setActiveTab, toggleDrawer }) => {

    // const [isDrawerVisible, setIsDrawerVisible] = useState(false);
    // const handleToggleDrawer = () => {
    //     setIsDrawerVisible(!isDrawerVisible);
    // };

    const renderTab = () => {
        switch (setActiveTab) {
          case 'Form':
            {isDrawerVisible && <drawerContent onClose={() => setIsDrawerVisible(false)} />}
            return <Form />;
          case 'Shipped':
            return <Shipped/>
          default:
            return null;
        }
      };


    const [fontsLoaded] = useFonts({
        Manrope_400Regular,
        Manrope_500Medium,
        Manrope_700Bold,
    });

    if (!fontsLoaded) {
        return null; // Or render a loading indicator
    }

    else if (fontsLoaded == true) {
        console.log("Fonts loaded SUccessfully")
    }

    const arrowButtonImage = require('../../assets/Header/arrow-left.png')
    const notificationBellImage = require('../../assets/Header/notification.png')
    const searchImage = require('../../assets/Header/search.png')
    const filtersImage = require('../../assets/Header/filters.png')



    return (

        <React.Fragment>

            {/* Header Section */}

            <View style={HeaderStyles.body} onPress={function(){
                if (props.toggleDrawer == false){
                    props.toggleDrawer == true
                }
            }}>
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
                <View style={HeaderStyles.navItemWrapper}>
                    <TouchableOpacity style={[HeaderStyles.navigationItems, HeaderStyles.navigationActiveItem]} onPress={() => setActiveTab('Form')}>
                        <Text style={HeaderStyles.navigationItemTextActive}> New </Text><View style={HeaderStyles.activeNotifications}><Text style={HeaderStyles.innertextActive}>
                            3
                        </Text></View>
                    </TouchableOpacity></View>

                <TouchableOpacity style={[HeaderStyles.navItemWrapperGrey, HeaderStyles.navItemWrapperGrey2]} onPress={() => setActiveTab('Shipped')}>
                    <View style={HeaderStyles.navigationItems}>
                        <Text style={HeaderStyles.navigationItemText}> Fulfilled </Text><View style={HeaderStyles.Notifications}><Text style={HeaderStyles.innertext}>
                            6
                        </Text></View>
                    </View></TouchableOpacity   >

                <View style={[HeaderStyles.navItemWrapperGrey, HeaderStyles.navItemWrapperGrey3]}>
                    <View style={HeaderStyles.navigationItems}>
                        <Text style={HeaderStyles.navigationItemText}> Cancelled </Text><View style={HeaderStyles.Notifications}><Text style={HeaderStyles.innertext}>
                            2
                        </Text></View>
                    </View></View>

            </View>

            {/* <View style={HeaderStyles.horizontalLine}></View> */}

            {/* Input Search Section */}

            <View style={HeaderStyles.searchSection}>
                {/* <Image source={searchImage} style={[HeaderStyles.searchImage, { position: 'absolute', left: '9%' },]}>

                </Image>
                <TextInput style={Components.SearchInput}
                    placeholder="        Search by Order Id, Device Name " /> */}

                <SearchInput />

                <TouchableOpacity style={HeaderStyles.filters} onPress={toggleDrawer}>
                    <Image source={filtersImage} style={HeaderStyles.filtersImage} />
                </TouchableOpacity>


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

    navItemWrapperGrey: {
        borderBottomWidth: 1,
        borderBottomColor: Colors.greyMed,
        paddingLeft: 4,

    },



    heading: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.blackPrimary,
        fontFamily: 'Manrope_700Bold',
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
        // justifyContent: 'space-around',
        width: '100%',
        marginHorizontal: 10,

    },

    navigationItems: {
        borderRadius: 50,
        marginVertical: 4,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',

    },

    navigationItemText: {
        padding: 11.5,
        fontWeight: '700',
        fontSize: 15,
        color: Colors.subheading,


    },

    navigationActiveItem: {
        backgroundColor: Colors.blueSecondary,
    },

    navigationItemTextActive: {
        color: Colors.bluePrimary,
        paddingLeft: 10,
        paddingHorizontal: 3,
        fontWeight: '700',

    },

    navItemWrapper: {
        borderBottomWidth: 3,
        // borderColor: 'transparent',
        borderBottomColor: Colors.bluePrimary,
        paddingHorizontal: 2,
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        textAlign: 'center',
    },

    navItemWrapperGrey2: {
        paddingLeft: 10,
    },

    navItemWrapperGrey3: {
        paddingRight: 3,
    },

    innertextActive: {
        fontWeight: '700',
        color: Colors.bluePrimary,
        paddingHorizontal: 7,
        borderRadius: 90,
    },

    innertext: {
        fontWeight: '700',
        color: Colors.subheading,
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

        objectFit: 'contain'
    },

    Notifications: {
        backgroundColor: Colors.greySecondary,
        borderRadius: 40,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 2,
        marginRight: 15,
    },

    // Horizontal Line

    horizontalLine: {
        borderBottomColor: '#EFEFEF',
        borderBottomWidth: 2,

    },

    // Search Section

    searchSection: {

        // marginVertical: 35,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        // position: 'relative',
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
    },

    textBold: {
        fontFamily: 'Manrope_700Bold',

    },

})

export default Header
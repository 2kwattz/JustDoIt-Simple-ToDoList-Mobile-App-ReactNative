import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';

// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const SearchInput = () => {

    return (
        <React.Fragment>
            <Image source={searchImage} style={HeaderStyles.searchImage} styles={{ position: 'relative',top: 5,
        left: 10,
        width: 30,
        height: 30,}}>

            </Image>
            <TextInput style={Components.SearchInput}   
                placeholder="Search by Order Id, Device Name " />


        </React.Fragment>
    )
}

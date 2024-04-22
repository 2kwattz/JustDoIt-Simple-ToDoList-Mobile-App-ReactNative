import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';

// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

const searchImage = require('../../assets/Header/search.png')

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const SearchInput = () => {

    return (
        <React.Fragment>
            <View style={SearchInputStyles.SearchView}>
            <Image source={searchImage} style={SearchInputStyles.searchImage}/>
            <TextInput style={SearchInputStyles.Input}
            placeholder="Search by Order Id, Device Name">

            </TextInput>
            </View>
        </React.Fragment>
    )
}

const SearchInputStyles = StyleSheet.create({

    SearchView:{
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',

        borderColor: Colors.greyMed,
        borderWidth: 1,
        borderRadius: 30,
        paddingVertical: 9,
        paddingHorizontal: 13,
    },

    Input:{
        paddingHorizontal: 10,
    },

    // searchImage:{
    //     paddingRight: 60,
    // }
})


export default SearchInput
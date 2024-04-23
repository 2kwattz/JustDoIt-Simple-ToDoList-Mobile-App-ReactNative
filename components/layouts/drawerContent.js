import React, { useState } from 'react'
import { Text, View, ScrollView, TextInput, Image, StyleSheet, Button, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'

import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import { useFonts } from 'expo-font';

// Components

import Components from '../../styles/components';
import SearchInput from '../elements/SearchInput';

const drawerContent = ({navigation}) => {
    return (
        <View style={drawerContentStyles.popup}>
            Lorem Ipsum Dopium 
        </View>
    )
}

const drawerContentStyles = StyleSheet.create({

    popup:{
        backgroundColor: Colors.greySecondary,

    }
})
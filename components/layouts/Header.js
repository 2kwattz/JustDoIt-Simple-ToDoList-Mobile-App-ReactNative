import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button } from 'react-native';

// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Components

import Input from '../../components/elements/input';

const Header = () => {

    const arrowButtonImage = require('')
    return (
        <View style={HeaderStyles.body}>
            <View style={HeaderStyles.headerParent}>
                <View style={HeaderStyles.headerItems}>
                    <Image style={HeaderStyles.headerImages}>

                    </Image>
                </View>

                <View style={HeaderStyles.headerItems}>
                    
                </View>

                <View style={HeaderStyles.headerItems}>
                    
                </View>

            </View>

        </View>
    )

}

const HeaderStyles = StyleSheet.create({

    body: {
        marginTop: '25%',
    },

    headerParent:{

    },

})

export default Header
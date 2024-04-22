import React from 'react'
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, Button, Image } from 'react-native';
// StyleSheets

// import globalStyles from '../styles/globalStyles';
import globalStyles from '../../styles/globalStyles';

import Colors from '../../styles/colors';
import fonts from '../../styles/fonts';

// Components

import Components from '../../styles/components';
import DottedLine from '../elements/dottedLine';

const calenderImage = require('../../assets/Order/calendar-tick.png')

const Form = () => {
    return (
        <React.Fragment>


            <View style={FormStyles.order}>
                <View style={FormStyles.orderHeader}>
                    <Text style={FormStyles.orderId}>
                        #2345567
                    </Text>

                    <View style={FormStyles.greenBadge}>
                        <Image source={calenderImage} />


                        <Text style={FormStyles.greenBadgeText}> Ready For Pickup </Text>
                    </View>
                </View>

                <DottedLine />

                <View style={[FormStyles.orderDetails,{margin: 10}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Order Received On </Text>
                        <Text style={FormStyles.orderDetailsTextValue}> 25th July 2024 </Text>
                    </View>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Physician Name </Text>
                        <Text style={FormStyles.orderDetailsTextValue}> Dr. Mark Paulo </Text>
                    </View>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Practice Name </Text>
                        <Text style={FormStyles.orderDetailsTextValue}> Stella Multispeciality </Text>
                    </View>

                </View>

                <DottedLine />

                {/* Order Type */}

                <View style={[FormStyles.orderDetails,{margin: 5}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Order Type </Text>
                        <Text style={FormStyles.orderDetailsTextBlue}> PAP New Start </Text>
                    </View>
                    
                </View>

                <DottedLine />

                {/* Product Details */}

                <View style={[FormStyles.orderDetails,{margin: 5}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Product Details </Text>
                        <Text style={FormStyles.orderDetailsText}> 4 Items </Text>
                    </View>
                    
                </View>

                <DottedLine />

                {/* FInancial Responsibility */}

                <View style={[FormStyles.orderDetails,{margin: 5}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Financial Responsibility </Text>
                        <Text style={FormStyles.orderDetailsTextGreen}> Paid </Text>
                    </View>
                    
                </View>

                <DottedLine />

                {/* Delivery Method */}

                <View style={[FormStyles.orderDetails,{margin: 5}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Delivery Method </Text>
                        <Text style={FormStyles.orderDetailsTextValue}> Pickup </Text>
                    </View>
                    
                </View>

                <DottedLine />

                <View style={[FormStyles.orderDetails,{margin: 5}]}>
                    <View style={FormStyles.orderDetailsTextContainer}>
                        <Text style={FormStyles.orderDetailsTextKey}> Pickup Details </Text>
                        <Text style={FormStyles.orderDetailsTextGreen}> Paid </Text>
                    </View>


            </View>
            </View>
        </React.Fragment>
    )
}

const FormStyles = StyleSheet.create({

    // Order Container

    order: {
        borderWidth: 1,
        borderColor: Colors.greyMed,
        borderRadius: 20,
        marginHorizontal: 20,
    },

    // Section One : Order Header

    orderHeader: {
        padding: 15,
        flex: 0,
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    // Order Tracking Id

    orderId: {
        color: Colors.subheading,
        fontWeight: '700',
        fontSize: 17,
    },

    greenBadge: {
        backgroundColor: Colors.greenSecondary,
        borderRadius: 60,
        padding: 5,
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },

    greenBadgeText: {
        color: Colors.greenPrimary,
        fontWeight: '700',
    },

    orderDetails: {
       width: '95%',
    },

    orderDetailsTextContainer:{
        flex: 0,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
        justifyContent: 'space-between',
        padding: 5,

    },

    orderDetailsTextKey:{
        color: Colors.subheading,
    },

    orderDetailsTextValue:{

    },

    orderDetailsTextBlue:{
        color: Colors.bluePrimary
    },

    orderDetailsTextGreen:{
        color: Colors.greenPrimary,
        fontWeight: '500',
    },



    







})

export default Form



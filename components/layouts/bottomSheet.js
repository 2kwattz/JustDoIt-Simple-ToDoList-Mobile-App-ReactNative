import 'react-native-gesture-handler';
import React, { useEffect, useState, useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Platform, FlatList, ScrollView, TextInput, TouchableOpacity, Image, Button, Alert, Pressable } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Colors from '../../styles/colors';
import BottomSheet from '@gorhom/bottom-sheet';
import BlackBackdrop from './blackBackdrop';
import closeButtonImage from '../../assets/popup/closeButton.png'
import { Shadow } from 'react-native-shadow-2';

const truckImage = require('../../assets/popup/truck.png')
const pickupImage = require('../../assets/popup/pickup.png')

export default function BottomSheetComponent({ isBottomSheetOpen, toggleBottomSheet }) {

    const snapPoints = useMemo(() => ['20%', '40%', '100%'], [])
    return (


        <BottomSheet style={[global.BottomSheetStyle, global.boxShadow]} snapPoints={snapPoints} >
<Shadow distance={35}>
            {/* <View style={global.boxShadow}> */}

                {/* <View style={global.boxShadow}>
                    <Text>Lorem</Text>
                </View> */}

                {/* <TouchableOpacity style={{
                    width: 70,
                    height: 70,
                    borderRadius: 100,
                    position: 'absolute',
                    bottom: 40,
                    alignItems: 'center',
                    alignSelf: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#243b6b',
                    elevation: 10,
                    shadowColor: '#243b6b',
                    shadowOpacity: 1
                }}>
                    <Image style={{width: 30, height: 30, tintColor: 'white', backgroundColor: '#243b6b'}}
                           source={truckImage}/>
                </TouchableOpacity> */}


                {isBottomSheetOpen && <View style={global.overlay} />}

                <TouchableOpacity style={global.closeButton} onPress={toggleBottomSheet}>
                    <Image source={closeButtonImage}></Image>
                </TouchableOpacity>
                <ScrollView>
                    <View style={global.BottomSheetInner}>

                        <Text style={global.heading}> Delivery Method </Text>
                        <Text style={global.subheading}> Choose how would you like to get your order </Text>

                        <View style={global.DeliveryMethod}>

                            <View style={global.FlexLight}>
                                <View style={global.FInner}>
                                    <View style={global.FIHeading}>

                                        <Image source={pickupImage} />
                                        <Text style={global.FInnerSubheading}>
                                            Pickup
                                        </Text>
                                    </View>
                                    <Text style={global.FDPara}> Pickup your order from our office location </Text>
                                </View>

                            </View>
                            {/* 
    <View style={[global.FlexDark,global.FInnerDark]}>
      <View style={global.FInner}>
        <View style={global.FIHeading}>
         
        <Image source={pickupImage} />
          <Text style={global.FInnerSubheading}>
            Delivery
          </Text>
        </View>
        <Text style={global.FDPara}> Pickup your order from our office location </Text>
      </View>

    </View> */}
                            <View style={global.FlexDark}>
                                <View style={[global.FInner, global.FInnerDark]}>
                                    <View style={global.FIHeading}>
                                        <Image source={truckImage} style={global.truckImage} />
                                        <Text style={[global.FInnerSubheading, global.FInnerSubheadingDark]}>
                                            Delivery
                                        </Text>
                                    </View>
                                    <Text style={[global.FDPara, global.FDParaDark]}> We will deliver the order at your doorstep </Text>
                                </View>

                            </View>

                        </View>

                        {/* Section 2 */}

                        <View style={global.section2}>

                            <Text style={global.sectionHeading}> Schedule your Tele-Training </Text>
                            <Text style={[global.FDPara, global.SectionPara]}> Choose the  date and time for Tele-Training and walk-through of your device</Text>

                            <Text style={global.SectionSubheading}> Select Day, Jan  2024 </Text>

                            <View style={global.CalenderFlex}>

                                <View style={[global.CalenderItem, global.CalenderActive]}>
                                    <Text style={global.CalenderHeadingActive}>
                                        Wed
                                    </Text>

                                    <Text style={global.CalenderTextActive}>
                                        10
                                    </Text>

                                </View>

                                <View style={[global.CalenderItem, global.CalenderGeneral]}>
                                    <Text style={global.CalenderHeading}>
                                        Thu
                                    </Text>

                                    <Text style={global.CalenderText}>
                                        11
                                    </Text>
                                </View>

                                <View style={[global.CalenderItem, global.CalenderGeneral]}>
                                    <Text style={global.CalenderHeading}>
                                        Fri
                                    </Text>

                                    <Text style={global.CalenderText}>
                                        12
                                    </Text>
                                </View>

                                <View style={[global.CalenderItem, global.CalenderInactive]}>
                                    <Text style={global.CalenderHeadingInactive}>
                                        Wed
                                    </Text>

                                    <Text style={global.CalenderTextInactive}>
                                        10
                                    </Text>
                                </View>


                            </View>

                            <Text style={global.SectionSubheading}> Morning Set </Text>

                            <View style={global.TimeFlex}>
                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        9:00
                                    </Text>
                                </View>

                                <View style={[global.tfItems, global.tfItemsActive]}>
                                    <Text style={global.tfTextActive}>
                                        10:00
                                    </Text>
                                </View>

                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        11:00
                                    </Text>
                                </View>

                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>

                                        12:00
                                    </Text>
                                </View>
                            </View>

                            <Text style={global.SectionSubheading}> Afternoon Set </Text>

                            <View style={global.TimeFlex}>
                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        18:00
                                    </Text>
                                </View>

                                <View style={[global.tfItems, global.tfItemsActive]}>
                                    <Text style={global.tfTextActive}>
                                        19:00
                                    </Text>
                                </View>

                                <View style={global.tfItems}>
                                    <Text style={global.tfText}>
                                        20:00
                                    </Text>
                                </View>

                                <View style={global.tfItemsEmpty}>
                                    <Text style={global.tfText}>


                                    </Text>
                                </View>
                            </View>

                            <Text style={global.SectionSubheading}> Preferred Language </Text>


                        </View>
                    </View>

                </ScrollView>


            {/* </View> */}
        </Shadow>
        </BottomSheet>
    )



}

const global = StyleSheet.create({

    wrapper: {
        flex: 1,
        height: '100%',
        // position: 'relative',
        // top: 0,
        // lef: 0,
        // zIndex: 4,
    },

    closeButton: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginRight: 20,

    },

    BottomSheetStyle: {


        elevation: 10,
        borderRadius: 30,
        padding: 6,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 999,
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 14,
        // backgroundColor: 'black',
        // background color must be set
        zIndex: -10,
    },

    outerShadow: {
        paddingVertical: 8,
        paddingHorizontal: 12,
    },

    boxShadow: {

        shadowOffset: { width: 10, height: 10 },
        elevation: 10,
        shadowColor: 'black',
        shadowOpacity: 1,
        // backgroundColor: Colors.whitePrimary,

        // backgroundColor: 'black',



        

        // backgroundColor: 'black',
    },
    BottomSheetInner: {
        padding: 25,
        marginVertical: -20,
    },

    heading: {
        fontSize: 20,
        fontWeight: '600',
    },

    subheading: {
        color: Colors.blackPrimary,
        fontSize: 14,
        marginVertical: 8,
    },

    FInner: {
        padding: 15,
        width: '100%',
        flex: 0,
        flexDirection: 'column',
        alignItems: 'center',
        paddingVertical: 20,

    },
    FInnerSubheading: {
        fontWeight: '600',
        color: Colors.greyMD,
        fontSize: 16,
    },

    FlexLight: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: Colors.greyMed,
        borderRadius: 20,
        marginVertical: 20,
    },

    FlexDark: {
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        borderRadius: 20,
    },


    truckImage: {
        marginLeft: 15,
        marginRight: 7,
    },

    FDPara: {
        fontSize: 13,
        color: Colors.blackPrimary,
        marginLeft: -30,
        marginVertical: 5,
    },

    FDParaDark: {
        color: Colors.whitePrimary,
    },

    FIHeading: {
        flex: 0,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: '100%',
    },

    FInnerDark: {
        backgroundColor: Colors.bluePrimary,
        borderRadius: 20,
        paddingVertical: 20,

    },

    FInnerSubheadingDark: {
        color: Colors.whitePrimary,

    },

    sectionHeading: {
        fontSize: 20,
        fontWeight: '700',
        marginTop: 20,
    },

    SectionSubheading: {
        fontSize: 16,
        fontWeight: '700',

    },

    section2: {
        marginVertical: 20,
        marginHorizontal: 5,
    },

    SectionPara: {
        paddingHorizontal: 36,
        paddingVertical: 10,
        lineHeight: 20,
        marginBottom: 20,

        color: Colors.heading,
    },

    // Calender Section

    CalenderFlex: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',

        padding: 15,
        marginVertical: 15,

    },

    CalenderItem: {
        width: '23%',
        flex: 0,
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: 10,
        paddingVertical: 15,
    },

    CalenderActive: {
        backgroundColor: Colors.bluePrimary,
        borderRadius: 20,
        padding: 7,
    },

    CalenderGeneral: {
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Colors.greyMed,
    },

    CalenderHeading: {
        textAlign: 'center',
    },

    CalenderText: {
        textAlign: 'center',
        fontWeight: '800',
    },

    CalenderInactive: {
        backgroundColor: '#E5E7EB',
        borderRadius: 20,
    },

    CalenderHeadingInactive: {
        color: Colors.greyPrimary,
        textAlign: 'center',
    },

    CalenderHeadingActive: {
        color: Colors.whitePrimary,
        textAlign: 'center',
    },

    CalenderTextInactive: {
        color: Colors.greyPrimary,
        textAlign: 'center',
    },

    CalenderTextActive: {
        color: Colors.whitePrimary,
        textAlign: 'center',
        fontWeight: '800',

    },

    // Time Set

    TimeFlex: {
        flex: 0,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15,
        paddingHorizontal: 0,
        marginVertical: 15,
    },

    tfItems: {
        borderWidth: 2,
        borderColor: Colors.greySecondary,
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        width: '22%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',

    },

    tfItemsEmpty: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
        width: '22%',
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },

    tfItemsActive: {
        backgroundColor: Colors.bluePrimary,
    },

    tfTextActive: {
        color: Colors.whitePrimary,
    },




})



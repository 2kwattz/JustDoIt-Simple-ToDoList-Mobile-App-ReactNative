// BlackBackdrop.js

import React from 'react';
import { View, StyleSheet } from 'react-native';

const BlackBackdrop = () => {
    return <View style={styles.backdrop}></View>;
};

const styles = StyleSheet.create({
    backdrop: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Black color with 50% opacity
    },
});

export default BlackBackdrop;

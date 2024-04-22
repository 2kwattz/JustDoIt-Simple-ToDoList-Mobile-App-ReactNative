import React from 'react';
import { StyleSheet, View } from 'react-native';

import Colors from '../../styles/colors';

const DottedLine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dottedLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  dottedLine: {
    width: '90%', // Adjust the width as needed
    borderBottomWidth: 2,
    // borderBottomHeight: 1,
    borderBottomColor: Colors.greyMed, // Change the color if needed
    borderStyle: 'dashed',
  },
});

export default DottedLine;

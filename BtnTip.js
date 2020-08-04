import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Separator,
  Button,
  TouchableOpacity,
} from 'react-native';

const CalculateTip = ({onPress, title}) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
   
    backgroundColor: '#537d0d',
    padding: 40,
   

    alignItems: 'center',
    justifyContent: 'center',
  },
  appButtonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default CalculateTip;

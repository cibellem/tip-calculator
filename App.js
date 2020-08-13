/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Separator,
  Button,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  TouchableOpacity,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import TipButton from './Button';
import CalculateTip from './BtnTip';

const App = () => {
  const [amount, setAmount] = useState(0);
  const [tip, setTip] = useState(0);
  const [amountToTip, setAmountToTip] = useState(0);
  const [total, setTotal] = useState(0);

  function calculateTip(value) {
    let tipAmount = (parseInt(amount) / 100) * parseInt(tip);
    setAmountToTip(tipAmount);
    let bill = Number(amount) + Number(tipAmount);  
    setTotal(bill);
  }

  return (
    <View style={styles.engine}>
      <View style={styles.sectionContainer}>
        <Text style={styles.header}>Tip Calculator</Text>
        <Text style={styles.sectionP}>Enter the bill total:</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={(value) => setAmount(value)}
          value={amount}
          style={styles.sectionTitle}></TextInput>
        <Text style={styles.sectionP}>You tip: ${amountToTip}</Text>
        <Text style={styles.sectionP}>Total plus tip: ${total}</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.sectionInputs}>
        <TipButton title="15%" onPress={() => setTip(15)} />
        <TipButton title="20%" onPress={() => setTip(20)} />
        <TipButton title="25%" onPress={() => setTip(25)} />
      </View>
      <View style={styles.button}>
        <CalculateTip onPress={calculateTip} title="calculate"></CalculateTip>
      </View>
    </View>
  );
};
//
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    backgroundColor: '#2222',
    
  },

  sectionContainer: {
    backgroundColor: '#333333',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50
  },
  sectionInputs: {
    display: 'flex',
    backgroundColor: '#333333',
    flexDirection: 'row',
    padding: 50,
    justifyContent: 'space-around',
  },
  sectionTitle: {
    fontSize: 100,
    fontWeight: '800',
    color: '#ffffff',
    borderBottomWidth: 8,
    marginBottom: 10,
    borderBottomColor: '#rgba(159, 243, 20, 0.5)',
  },
  sectionP: {
    fontSize: 20,
    fontWeight: '800',
    color: '#ffffff',
  },
  sectionTip: {
    flex: 1,
    fontSize: 40,
  },
  header: {
    fontSize: 50,
    padding: 10,
    fontWeight: '800',
    color: '#ffffff',
  },

});

export default App;

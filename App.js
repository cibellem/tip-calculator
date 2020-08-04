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
  const [amount, setAmount] = useState(Number(0));
  const [tip, setTip] = useState(15);
  const [amountToTip, setAmountToTip] = useState(Number(0));
  const [total, setTotal] = useState(Number(0));

  function calculateTip(value) {
    setAmount(parseInt(amount));
    let tipAmount = (parseInt(value) / 100) * parseInt(tip);
    setAmountToTip(tipAmount);
    let bill = parseInt(amount) + parseInt(amountToTip);
    alert(bill);
    setTotal(bill);
  }

  return (
    <View style={styles.engine}>
      <View style={styles.sectionContainer}>
        <Text style={styles.header}>Tip Calculator</Text>
        <Text style={styles.sectionP}>Enter the bill total</Text>
        <TextInput
          keyboardType="numeric"
          onChangeText={calculateTip}
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
      {/* <CalculateTip onPress={calculateTip} title="calculate"></CalculateTip> */}
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
  },
  sectionInputs: {
    display: 'flex',
    backgroundColor: '#333333',
    flexDirection: 'row',
    padding: 40,
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

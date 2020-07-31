/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
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

const App = () => {
  return (
    <>
      <View style={styles.sectionContainer}>
        <Text>enter total:</Text>
        <TextInput style={styles.sectionTitle}>$23</TextInput>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.sectionInputs}>
        <TipButton title="15%" />
        <TipButton title="20%" />
        <TipButton title="25%" />
      </View>
      <View>
        <Button
          title="calculate"
          color="#537d0d"
          accessibilityLabel="Click to calculate tip"></Button>
      </View>
    </>
  );
};
//
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },

  sectionContainer: {
    backgroundColor: '#000000',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionInputs: {
    display: 'flex',
    backgroundColor: '#000000',
    flexDirection: 'row',
    padding: 40,
    justifyContent: 'space-around',
  },
  sectionTitle: {
    fontSize: 100,
    fontWeight: '800',
    color: '#ffffff',
    borderBottomWidth: 5,
    borderBottomColor: '#rgba(159, 243, 20, 0.5)',
  },
  sectionTip: {
    flex: 1,
    fontSize: 40,
  },
});

export default App;

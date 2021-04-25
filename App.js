import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Home from './Screens/Home';
import Deck from './Screens/Deck';

function App() {
  return (
    <View>
      <Deck title="ReactNative" cards={5} />
    </View>
  );
}
const styles = StyleSheet.create({});

export default App;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Deck() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Score Card</Text>
      </View>
      <Text style={styles.text}>Score : 4/5</Text>
      <Text style={styles.text}>Percentage : 80%</Text>

      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Restart Quiz</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Back to Deck</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 150,
    alignItems: 'center',
  },
  header: {paddingBottom: 25},
  title: {
    fontSize: 25,
    fontFamily: 'monospace',
    color: '#5584FF',
    paddingBottom: 20,
  },
  text: {fontFamily: 'sans-serif', paddingBottom: 20},
  buttonText: {color: '#FFF', fontFamily: 'sans-serif'},
  addWrapper: {
    color: '#FFF',
    backgroundColor: '#55BCF6',
    padding: 15,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 200,
  },
});

export default Deck;

import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Deck({title, cards}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>Number of cards:{cards}</Text>
      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Start Quiz</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Add New Card</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Remove Deck</Text>
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

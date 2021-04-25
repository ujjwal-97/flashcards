import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

function NewDeck() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Deck</Text>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder={'Title of the new deck'}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Submit</Text>
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
  buttonText: {color: '#FFF', fontFamily: 'sans-serif', fontSize: 17},
  addWrapper: {
    backgroundColor: '#55BCF6',
    padding: 10,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 200,
  },
  input: {
    paddingTop: 30,
    paddingBottom: 15,
  },
  inputText: {
    fontFamily: 'sans-serif',
    fontSize: 18,
  },
});

export default NewDeck;

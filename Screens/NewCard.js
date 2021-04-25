import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

function NewCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Card</Text>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.input}>
        <TextInput
          style={styles.inputText}
          placeholder={'Type the question here'}
        />
        <TextInput style={styles.inputText} placeholder={'Option: 1'} />
        <TextInput style={styles.inputText} placeholder={'Option: 2'} />
        <TextInput style={styles.inputText} placeholder={'Option: 3'} />
        <TextInput style={styles.inputText} placeholder={'Option: 4'} />
        <TextInput
          style={styles.inputText}
          placeholder={'Answer: Option Number'}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity style={styles.addWrapper}>
        <View>
          <Text style={styles.buttonText}>Add Card</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 120,
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

export default NewCard;

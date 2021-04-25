import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

function Card({title, options, cards}) {
  const optionsList = options;
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.buttonText}>Questions left : {cards}</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>

        {optionsList.map((item, index) => {
          return (
            <TouchableOpacity style={styles.addWrapper}>
              <View>
                <Text style={styles.buttonText}>{item}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.buttonText}>Show Answer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    paddingVertical: 40,
    paddingHorizontal: 12,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  container: {
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#5584FF',
    paddingBottom: 20,
    paddingHorizontal: 12,
  },
  text: {fontFamily: 'sans-serif', paddingBottom: 20},
  buttonText: {
    color: '#5584FF',
    fontFamily: 'sans-serif',
    fontSize: 17,
    fontWeight: '200',
  },
  addWrapper: {
    color: '#FFF',
    borderColor: '#55BCF6',
    borderWidth: 1,
    padding: 15,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    width: 200,
  },
  footer: {flexDirection: 'row', justifyContent: 'space-between'},
});

export default Card;

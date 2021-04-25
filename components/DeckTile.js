import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const DeckTile = ({title, cards}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.item}>
        <View style={styles.itemLeft}>
          <View style={styles.square}></View>
          <Text style={styles.itemText}>Number of Cards: {cards} </Text>
        </View>
        <View style={styles.circular}></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontFamily: 'monospace',
    color: '#5584FF',
  },
  item: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 18,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    width: 350,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  itemText: {
    fontFamily: 'sans-serif',
    maxWidth: '80%',
  },
  square: {
    width: 20,
    height: 20,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
    marginRight: 15,
  },
  circular: {
    width: 12,
    height: 12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius: 5,
  },
});

export default DeckTile;

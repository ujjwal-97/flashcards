import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Home from './Screens/Home';
import Card from './Screens/Card';
import Deck from './Screens/Deck';
import NewDeck from './Screens/NewDeck';
import NewCard from './Screens/NewCard';
import ScoreCard from './Screens/ScoreCard';

function App() {
  return (
    <View>
      {/*
      <Card
        title="Which company created ReactNative ?"
        options={['Facebook', 'Google', 'Twitter', 'WhatsApp']}
        answer={1}
        cards={5}
      />
      */}
      {
        //<Home />
      }
      {
        //<Deck title="ReactNative" cards={5} />
      }
      {
        //<NewDeck />
      }
      {
        //<NewCard />
      }
      <ScoreCard />
    </View>
  );
}
const styles = StyleSheet.create({});

export default App;

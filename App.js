import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Home from './Screens/Home';
import Card from './Screens/Card';
import Deck from './Screens/Deck';
import NewDeck from './Screens/NewDeck';
import NewCard from './Screens/NewCard';
import ScoreCard from './Screens/ScoreCard';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={((title = 'ReactNative'), (cards = 5))}
        />
        <Stack.Screen
          name="Card"
          component={Card}
          options={
            ((title = 'Which company created ReactNative ?'),
            (optio = ['Facebook', 'Google', 'Twitter', 'WhatsApp']),
            (answer = 1),
            (cards = 5))
          }
        />
        <Stack.Screen name="NewCard" component={NewCard} />
        <Stack.Screen name="NewDeck" component={NewDeck} />
        <Stack.Screen name="ScoreCard" component={ScoreCard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({});

export default App;

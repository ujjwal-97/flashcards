import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import DeckTile from '../components/DeckTile';

const taskItems = [
  {title: 'React', cards: 5},
  {title: 'Java', cards: 25},
  {title: 'JS', cards: 15},
  {title: 'React', cards: 5},
  {title: 'Java', cards: 25},
  {title: 'Java', cards: 25},
  {title: 'JS', cards: 15},
  {title: 'React', cards: 5},
  {title: 'Java', cards: 25},
  {title: 'React', cards: 5},
  {title: 'Java', cards: 25},
  {title: 'Java', cards: 25},
  {title: 'JS', cards: 15},
  {title: 'React', cards: 5},
  {title: 'Java', cards: 25},
];
function Home() {
  return (
    <View>
      <ScrollView style={styles.container}>
        {taskItems.map((item, index) => {
          return (
            <TouchableOpacity key={index}>
              <DeckTile title={item.title} cards={item.cards} />
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={styles.button}>
        <TouchableOpacity style={styles.addWrapper}>
          <View>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <Text>FlashCards</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingHorizontal: 12,
    paddingBottom: 60,
  },
  button: {
    position: 'absolute',
    paddingHorizontal: 12,
    right: 0,
    paddingVertical: 12,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#77BCF6',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default Home;

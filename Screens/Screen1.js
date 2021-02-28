import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Header from '../components/Header';

class S1 extends Component {
  change(buzzerColor) {
    this.props.navigation.navigate('BuzzerScreen', {color: buzzerColor});
  }
  render() {
    return (
      <View>
        <Header />
        <TouchableOpacity
          onPress={() => {
            this.change('blue');
          }}
          style={styles.team1}>
          <Text style={styles.text}>Team1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.change('red');
          }}
          style={styles.team2}>
          <Text style={styles.text}>Team2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.change('green');
          }} style={styles.team3}>
          <Text style={styles.text}>Team3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            this.change('purple');
          }} style={styles.team4}>
          <Text style={styles.text}>Team4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  team1: {
    backgroundColor: 'blue',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    margin: 25,
    padding: 25,
  },

  team2: {
    backgroundColor: 'red',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    margin: 25,
    padding: 25,
  },

  team3: {
    backgroundColor: 'green',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    margin: 25,
    padding: 25,
  },

  team4: {
    backgroundColor: 'purple',
    borderWidth: 2,
    borderRadius: 20,
    borderColor: 'black',
    margin: 25,
    padding: 25,
  },

  text: {
     alignSelf: 'center',
    fontWeight: 'Bold',
    color: 'white',
    fontSize: 24,
  }
});

export default S1;

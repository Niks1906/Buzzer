import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

class Header extends Component {
  render() {
    return (
      <View>
        <View style={styles.header1bg}>
          <Text style={styles.header1}>BUZZER APP</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header1bg: {
    backgroundColor: 'yellow',
    width: 400,
    height: 50,
  },

  header1: {
    marginLeft: 110,
    fontWeight: 'bold',
    fontSize: 24,
  },
});

export default Header;

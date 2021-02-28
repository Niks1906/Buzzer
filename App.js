import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import S1 from './Screens/Screen1';
import S2 from './Screens/Screen2';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

export default class App extends Component {
  render() {
    return (
      <View>
        <ChangeScreen />
      </View>
    );
  }
}

const SwitchScreen = createSwitchNavigator({
  HomeScreen: S1,
  BuzzerScreen: S2,
});

const ChangeScreen = createAppContainer(SwitchScreen);

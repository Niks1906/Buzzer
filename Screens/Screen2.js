import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import SoundButton from '../components/Sound';
import Header from '../components/Header';

class S2 extends Component {
  render() {
    return (
      <View>
        <Header />
        <SoundButton buzzerColor={this.props.navigation.getParam('color')} />
      </View>
    );
  }
}

export default S2;
import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from '../config';
import firebase from 'firebase'

class SoundButton extends Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      {
        shouldPlay: true,
      }
    );
  };

  pressed = (colorName) => {
    var database = db.ref("teams/"+ colorName + "/");
    var time = firebase.database.ServerValue.TIMESTAMP;
    database.update({
      isButtonPressed: true,
      timestamp: time
    });
  };

  render() {
    return (
      <View>
        <TouchableOpacity
          style={[styles.buzzer, { backgroundColor: this.props.buzzerColor }]}
          onPress={() => {
            this.playSound();
            this.pressed(this.props.buzzerColor);
          }}>
          <Text style={styles.buzzerText}>PRESS ME</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buzzer: {
    borderWidth: 2,
    borderColor: 'black',
    marginTop: 200,
    marginLeft: 90,
    width: 200,
    height: 200,
    borderRadius: 100,
  },

  buzzerText: {
    alignSelf: 'center',
    marginTop: 75,
    fontWeight: 'Bold',
    color: 'white',
    fontSize: 24,
  },
});
export default SoundButton;

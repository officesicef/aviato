import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
import { Actions } from 'react-native-router-flux';

const Avatar = () => (<View style={styles.avatar}><Button transparent onPress={() => Actions.edit()} ><Image style={styles.image} source={require('../../images/profile.png')}/></Button></View>);

const styles = StyleSheet.create({
  avatar: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: '#b3d2ee',
    borderColor: 'white',
  },
  image: {
    width: 100,
    height: 100,
    marginLeft: -2,
    marginTop: 50,
  }
});

export default Avatar;

import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'native-base';
import Avatar from "../../avatar";
import theme from '../../../theme';

const Header = (props) => (
  <View>
    <View style={styles.backBlue} ></View>
    <View style={styles.avatarContainer} >
      <Avatar />
    </View>

    <Text style={styles.name}>{props.user && props.user.name}</Text>
  </View>
);


const styles = StyleSheet.create({
  backBlue: {
    height: 60,
    alignSelf: 'stretch',
    backgroundColor: theme.colors.header,
  },
  avatarContainer: {
    marginTop: -45,
  },
  name: {
    alignSelf: 'center',
    color: theme.colors.text,
    fontSize: 24,
  },
});

export default Header;

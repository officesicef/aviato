import React from 'react';
import { Text, StyleSheet } from "react-native";
import { Button } from 'native-base';
import theme from '../../theme';

const Panic = () => (
  <Button style={styles.panic}>
    <Text style={styles.text}>Panic</Text>
  </Button>
);

const styles = StyleSheet.create({
  panic: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    margin: 20,
    marginTop: 70,
    backgroundColor: theme.colors.danger,
  },
  text: {
    alignSelf: 'center',
    color: theme.colors.light,
  },
});

export default Panic;
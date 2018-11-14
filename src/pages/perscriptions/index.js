
import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'native-base';
import Perscriptions from '../../components/Perscriptions';

const PerscriptionsPage = () => (
  <View style={styles.page}>
    <Perscriptions />
  </View>
);

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});

export default PerscriptionsPage;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import { Root } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers';
import Router from './src/routes';
import ReduxThunk from 'redux-thunk';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
console.disableYellowBox = true;

export default class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Root>
        <Provider store={store}>
            <Router />
        </Provider>
      </Root>
    );
  }
}

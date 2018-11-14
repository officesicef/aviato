import React from 'react';
import { View } from 'native-base';

const BackEffect = () => <View
    style={{ position: 'absolute', width: 1000, height: 1000, top: 200, left: 200, backgroundColor: 'white', transform: [{ rotate: '45deg' }]}}>
</View>

export default BackEffect;
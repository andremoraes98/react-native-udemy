
import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const Stack = createNativeStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen name="TelaA" component={ ScreenA }/>
        <Stack.Screen name="TelaB" component={ ScreenB }/>
        <Stack.Screen name="TelaC" component={ ScreenC }/>
      </Stack.Navigator>
    )
  }
}

export default StackNavigation;

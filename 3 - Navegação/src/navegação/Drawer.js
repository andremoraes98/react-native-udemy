import React, { Component } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const DrawerBar = createDrawerNavigator();

class Drawer extends Component {
  render() {
    return (
      <DrawerBar.Navigator>
        <DrawerBar.Screen name='TelaA' component={ ScreenA }/>
        <DrawerBar.Screen name='TelaB' component={ ScreenB }/>
        <DrawerBar.Screen name='TelaC' component={ ScreenC }/>
      </DrawerBar.Navigator>
    )
  }
}

export default Drawer;

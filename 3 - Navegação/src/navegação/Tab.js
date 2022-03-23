import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const TabBar = createBottomTabNavigator();

class Tab extends Component {
  render() {
    return (
      <TabBar.Navigator
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
          labelStyle: {
            fontSize: 30,
          }
        }}
      >
        <TabBar.Screen name='TelaA' component={ ScreenA }/>
        <TabBar.Screen name='TelaB' component={ ScreenB }/>
        <TabBar.Screen name='TelaC' component={ ScreenC }/>
      </TabBar.Navigator>
    )
  }
}

export default Tab;

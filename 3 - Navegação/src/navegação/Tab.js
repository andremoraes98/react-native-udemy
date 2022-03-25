import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';

const TabBar = createBottomTabNavigator();

class Tab extends Component {
  render() {
    return (
      <TabBar.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            switch (route.name) {
              case 'TelaA':
                iconName = focused
                  ? 'ios-home'
                  : 'ios-home-outline';
                break;
              case 'TelaB':
                iconName = focused
                  ? 'ios-information-circle'
                  : 'ios-information-circle-outline';
                break;
              case 'TelaC':
                iconName = focused
                  ? 'reorder-four'
                  : 'reorder-four-outline';
                break;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
        tabBarOptions={{
          activeTintColor: 'red',
          inactiveTintColor: 'blue',
        }}
      >
        <TabBar.Screen
          name='TelaA'
          component={ ScreenA }
          options={{
            title: 'Home'
          }}
        />
        <TabBar.Screen
          name='TelaB'
          component={ ScreenB }
          options={{
            title: 'Info'
          }}
        />
        <TabBar.Screen
          name='TelaC'
          component={ ScreenC }
          options={{
            title: 'More'
          }}
        />
      </TabBar.Navigator>
    )
  }
}

export default Tab;

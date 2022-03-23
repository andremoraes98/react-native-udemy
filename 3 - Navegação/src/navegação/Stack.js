import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScreenA from '../views/ScreenA';
import ScreenB from '../views/ScreenB';
import ScreenC from '../views/ScreenC';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

class StackNavigation extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="TelaA">
        <Stack.Screen
          name="TelaA"
          options={{
            title: 'Home',
          }}
        >
          {(props) => (
              <PassoStack { ...props } advance={'TelaB'}>
                <ScreenA />
              </PassoStack>
            )}
        </Stack.Screen>

        <Stack.Screen name="TelaB">
          {(props) => (
              <PassoStack { ...props } advance={'TelaC'} back>
                <ScreenB />
              </PassoStack>
            )}
        </Stack.Screen>
        
        <Stack.Screen name="TelaC">
          {(props) => (
              <PassoStack { ...props } advance={'TelaA'} back>
                <ScreenC />
              </PassoStack>
            )}
        </Stack.Screen>
      </Stack.Navigator>
    )
  }
}

export default StackNavigation;

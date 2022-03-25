import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';

const Stack = createNativeStackNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer
        initialRouteName="UserList"
      >
        <Stack.Navigator>
          <Stack.Screen
            name="UserList"
            component={ UserList }
          />
          <Stack.Screen
            name="UserForm"
            component={ UserForm }
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
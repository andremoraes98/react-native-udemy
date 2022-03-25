import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import { Button, Icon } from '@react-native-elements/themed';

const Stack = createNativeStackNavigator();
const screenOptions = {
  headerStyle: {
    backgroundColor: '#f4511e'
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: '700',
  }
}

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='UserList'
          screenOptions={ screenOptions }
        >
          <Stack.Screen
            name="UserList"
            component={ UserList }
            options={() => {
              return {
                title: "Lista de Usuários",
                headerRight: () => {
                  <Button
                    type="clear"
                    title="Hello"
                    icon={<Icon name="add" size={25} color="white" />}
                  />
                }
              }
            }}
          />
          <Stack.Screen
            name="UserForm"
            component={ UserForm }
            options={{
              title: "Formulário de Usuários"
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}

export default App;
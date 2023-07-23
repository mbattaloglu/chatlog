import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Chats from './pages/Chats';
import Person from './pages/Person';
import Chat from './pages/Chat';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={Chats}
        options={{
          title: 'Chats',
          headerStyle: {
            backgroundColor: '#29bf12',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Person"
        component={Person}
        options={{
          title: 'Personal Information',
          headerStyle: {
            backgroundColor: '#29bf12',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{
          title: 'Sohbet',
          headerStyle: {
            backgroundColor: '#29bf12',
          },
          headerTitleAlign: 'center',
          headerTintColor: '#fff',
        }}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
};

export default App;

import 'react-native-gesture-handler'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, StackActions } from '@react-navigation/native';

import Home from './screens/home'
import Login from './screens/login'
import Register from './screens/register'

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login Screen'
            }} />

          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              title: 'Register Screen',
              headerLeft: null,
            }} />

          <Stack.Screen
            name="Home"
            component={Home}
            options={({ navigation }) => ({
              title: 'Home Screen',
              headerLeft: null,
              headerRight: null,
            })} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

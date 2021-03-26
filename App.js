import 'react-native-gesture-handler';

import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} options={{
    headerShown: false
  }} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} options={{
    headerShown: false
  }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
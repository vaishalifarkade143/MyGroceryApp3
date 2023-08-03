
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import HomeScreen from './src/Screens/HomeScreen';
import Main from './src/Screens/Main';


const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{ headerShown: false}}
        />
        </Stack.Navigator>
</NavigationContainer>
);
};

export default App;

 

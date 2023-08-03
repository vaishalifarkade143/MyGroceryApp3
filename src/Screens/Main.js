import { Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './HomeScreen';

//to add side navgation
const Drawer = createDrawerNavigator();


const Main = () => {
  return (
    <Drawer.Navigator >
      <Drawer.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ headerShown: false }}>

      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default Main;


import { Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Main from './Screens/Main';

import ProductDetail from './Screens/ProductDetail';


const Stack = createNativeStackNavigator();
const AppNavigator = () => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
            <Stack.Screen
                    name="ProductDetails"
                    component={ProductDetail}
                    />
             <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{ headerShown: false }} 
                    />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;


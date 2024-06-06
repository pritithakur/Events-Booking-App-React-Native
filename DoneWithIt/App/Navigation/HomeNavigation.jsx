import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/Home';
import Details from '../Screens/HotelDetails/Details';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen name='home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
    </Stack.Navigator>
  )
}
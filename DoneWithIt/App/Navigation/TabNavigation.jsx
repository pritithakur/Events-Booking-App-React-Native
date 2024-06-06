import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Profile from '../Screens/ProfileScreen/Profile';
import Booking from '../Screens/BookingScreen/Booking';
import { FontAwesome } from '@expo/vector-icons';
import Colors from '../Utils/Colors';
import HomeNavigation from './HomeNavigation';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: Colors.PRIMARY
    }}
    >
      <Tab.Screen name="home" component={HomeNavigation} 
      options= {{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginTop:-7}}>Home</Text>
        ),
        tabBarIcon: ({color,size})=>(
          <FontAwesome name="home" size={size} color={color} />
        )
      }}

      />
      <Tab.Screen name="Booking" component={Booking} 
      options= {{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginTop:-7}}>Booking</Text>
        ),
        tabBarIcon: ({color,size})=>(
          <FontAwesome name="bookmark" size={size} color={color} />
        )
      }}
      />

      <Tab.Screen name="Profile" component={Profile} 
      options= {{
        tabBarLabel:({color})=>(
          <Text style={{color:color, fontSize:12, marginTop:-7}}>Profile</Text>
        ),
        tabBarIcon: ({color,size})=>(
          <FontAwesome name="user" size={size} color={color} />
        )
      }}
      />
      
    </Tab.Navigator>
  );
}
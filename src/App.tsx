/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Categories from './pages/Categories/Categories'
import Detail from './pages/Detail/Detail';
import Meals from './pages/Meals/Meals';


const Stack = createNativeStackNavigator();

function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Categories' component={Categories} />
        <Stack.Screen name='Detail' component={Detail} />
        <Stack.Screen name='Meals' component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

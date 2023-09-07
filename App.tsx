
import React, {useEffect,useState} from 'react';
import {Text,View,Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screen/home';
import Map from './screen/map';
import Todo from './screen/todo';
import TaskDetails from './screen/tuskDetails';

const Stuck = createNativeStackNavigator();

const App = ()=> {
  
  return (
    <NavigationContainer>
      <Stuck.Navigator initialRouteName="Home">
        <Stuck.Screen name = 'Home' component={Home}/>
        <Stuck.Screen name = 'Map' component={Map}/>
        <Stuck.Screen name = 'Todo' component={Todo}/>
        <Stuck.Screen name = 'TaskDetails' component={TaskDetails}/>

      </Stuck.Navigator>

    </NavigationContainer>
  );
};




export default App;

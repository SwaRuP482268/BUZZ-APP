import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebookcreen from './screens/fb';
import Instagramcreen from './screens/ig';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends React.Component{
 render(){
  return (
    <AppContainer/>
  )
}
}

const TabNavigator = createBottomTabNavigator({
  Facebook : {screen:Facebookcreen},
  Instagram : {screen:Instagramcreen}, 
});

const AppContainer = createAppContainer(TabNavigator);
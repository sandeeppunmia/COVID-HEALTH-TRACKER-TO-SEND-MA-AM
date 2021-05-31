import React, {Component} from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SuggestionsScreen from '../screens/SuggestionsScreen';

export const AppTabNavigator = createBottomTabNavigator({
    HomeScreen:{
        screen:HomeScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/home.png")}
                        style={{width:20,height:20}}/>,
            tabBarLabel:"Home"
        }
    },
    SuggestionsScreen:{
        screen:SuggestionsScreen,
        navigationOptions:{
            tabBarIcon:<Image source={require("../assets/suggestions.png")}
                        style={{width:20,height:20}}/>,
            tabBarLabel:"Suggestions"
        }
    },
    
    
})
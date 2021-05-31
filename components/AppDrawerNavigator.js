import React from 'react';
import {Image} from 'react-native';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AddMembersScreen from '../screens/AddMembers';
import MembersScreen from '../screens/MembersScreen';
import {AppTabNavigator} from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import { Icon } from 'react-native-elements';
import MembersDetailsScreen from '../screens/MembersDetails';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator,
        navigationOptions:{
            drawerIcon:<Icon name="home" type="fontawesome5"/>
        }
    },
    Members:{
        screen:MembersScreen,
        navigationOptions:{
            drawerIcon:<Icon name="people" type="fontawesome5"/>
        }
    },
    AddMembers:{
        screen:AddMembersScreen,
        navigationOptions:{
            drawerIcon:<Icon name="add" type="fontawesome5"/>
        }
    },
    MemberDetails:{
        screen:MembersDetailsScreen,
        navigationOptions:{
            drawerIcon:<Icon name="details" type="fontawesome5"/>
        }
    }
   },
   {
       contentComponent:CustomSideBarMenu
   },
   {
       initialRouteName:'Home'
   }
)
import React,{Component} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import firebase from 'firebase';
import {Icon} from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export default class CustomSideBarMenu  extends Component{
    render(){
        return(
            <View style={{flex:1}}>
                <View style={styles.drawerItemsContainer}>
                    <DrawerItems {...this.props}/>
                </View>
                <View style={styles.logOutContainer}>
                    <TouchableOpacity style={styles.logOutButton}
                    onPress={()=>{
                        this.props.navigation.navigate('SignUpLoginScreen')
                        firebase.auth().signOut()
                    }}>
                        <Icon
                          name="logout"
                          type="antdesign"
                          size={RFValue(20)}
                          iconStyle={{paddingLeft:RFValue(10)}}/>
                        <Text style={{paddingBottom:RFValue(120),fontSize:RFValue(20)}}>
                            LogOut
                        </Text>
                    </TouchableOpacity>

                </View>


            </View>
        )
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    drawerItemsContainer:{
        flex:0.8
    },
    logOutContainer:{
        flex:0.2,
        justifyContent:'flex-end',
        paddingBottom:10
    },
    logOutButton:{
        height:30,
        width:'100%',
        justifyContent:'center',
        
    }
})
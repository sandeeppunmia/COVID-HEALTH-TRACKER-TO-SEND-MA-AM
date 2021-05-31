import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Modal, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader';
import { RFValue } from 'react-native-responsive-fontsize';
import { DrawerLayoutAndroidBase } from 'react-native';

export default class AddMembersScreen extends Component {

    constructor() {
        super();
        this.state = {
            emailId: firebase.auth().currentUser.email,
            password: '',
            name: '',
            memberName:'',
            contact: '',
            memberContact:'',
            pin:'',
            isModalVisible: 'false',
            confirmPassword: ''
        }
    }

    getUserDetails=()=>{
        var email=firebase.auth().currentUser.email;
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot=>{
            snapshot.forEach(doc=>{
                var data= doc.data()
                this.setState({
                    emailId:data.email_id,
                    name:data.name,
                    contact:data.contact,
                    docId:doc.id
                })
            })
        })
    }

    componentDidMount(){
        this.getUserDetails()
    }

    updateUserDetails = () => {
        db.collection('members').add({
            emailId:this.state.emailId,
            name:this.state.name,
            memberName:this.state.memberName,
            contact:this.state.contact,
            memberContact:this.state.memberContact
        })
        return Alert.alert('Member Added Succesfully','',[{text:'Ok',onPress:()=>this.setState({
            memberName:'',
            memberContact:'',
            pin:''
        })}])
       
    }

    render() {
        return (
            <ScrollView>
            <View style={styles.container}>
                <MyHeader title="Add Members"
                    navigation={this.props.navigation} />
                    <Image source={require("../assets/family.png")}
                       style={styles.familyImage}/>

            <TextInput style={styles.formTextInput}
                            placeholder={'Name'}
                            maxLength={30}
                            onChangeText={(text)=>{
                                this.setState({
                                    memberName:text
                                })
            }}
            value={this.state.memberName}
            />             

                <TextInput style={styles.formTextInput}
                    placeholder={'Contact'}
                    maxLength={10}
                    keyboardType={'name-phone-pad'}
                    onChangeText={(text) => {
                        this.setState({
                           memberContact: text
                        })
                    }}
                    value={this.state.memberContact}
                />

                <TextInput style={styles.formTextInput}
                    placeholder={'Enter a 4 digit pin'}
                    maxLength={4}
                    keyboardType={'name-phone-pad'}
                    onChangeText={(text) => {
                        this.setState({
                           pin: text
                        })
                    }}
                    value={this.state.pin}
                />

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        this.updateUserDetails()
                    }}>
                    <Text style={styles.buttonText}>
                        Add Member
                </Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    formTextInput: {
        width: '90%',
        height: RFValue(50),
        alignSelf: 'center',
        borderColor: 'grey',
        borderRadius: 2,
        borderWidth: 1,
        marginTop: 20,
        padding: RFValue(10),
        marginBottom: RFValue(20),
        marginRight: RFValue(20)
    },
    button: {
        width: '100%',
        height: RFValue(60),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: RFValue(50),
        backgroundColor: '#32867d',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.44,
        shadowRadius: 10.32,
        elevation: 16,
        marginTop: 20,
        marginRight: RFValue(100)
    },
    buttonText: {
        color: '#ffff',
        fontWeight: '200',
        fontSize: 20
    },
    familyImage:{
        width:RFValue(200),
        height:RFValue(200),
        resizeMode:'stretch',
        marginLeft:RFValue(150),
        borderColor:'black',
        marginTop:RFValue(25),
        alignItems:'center',
        justifyContent:'center',
        marginRight:RFValue(35)
    }
})
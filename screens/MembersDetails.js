import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import db from '../config';
import firebase from'firebase';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import {Title,Color,Size,SoundUrl} from 'react-native';
import {Audio} from 'expo-av';

export default class MembersDetailsScreen extends Component{

constructor(){
    super();
    this.state={
        name:'',
        password:'',
        age:'',
        temperature:'',
        oxygenLevel:'',
        date:'',
        bloodPressure:'',
        sugar:'',
        memberName:'',
        memberContact:'',
        emailId: firebase.auth().currentUser.email,
        allMembers:[],
        pin:''
    }
}

    /*componentDidMount(){
        this.getUserDetails()
    }

    getUserDetails=async()=>{
        var email=firebase.auth().currentUser.email;
        var requestRef= await db.collection('temperature&oxygenLevel').doc(this.state.userId)
        .get()
        .then((doc)=>{
            var name=doc.data().name
            console.log(name);
            console.log(doc.data().age);
            console.log(doc.data().temperature);
            console.log(doc.data().oxygenLevel)
            this.setState({
                name:doc.data().name,
                age:doc.data().age,
                temperature:doc.data().temperature,
                oxygenLevel:doc.data().oxygenLevel,
                bloodPressure:doc.data().bloodPressure,
                sugar:doc.data().sugar,
                date:doc.data().date
            })
        })
        var date1 = new Date().getDate()
        var date2 = this.state.date
        if(date2 - date1>20){
            Alert.alert("Please Check Your Temperature and Oxygen Level")
            this.playSound()
        }else{
            Alert.alert("Your parametres are up to date")
        }
    }

    
updateUserDetails=()=>{
    db.collection('temperature').doc(this.state.userId)
    .update({
        'name':this.state.name,
        'age':this.state.age,
        'temperature':this.state.temperature,
        'oxygenLevel':this.state.oxygenLevel,
        'bloodPressure':this.state.bloodPressure,
        'sugar':this.state.sugar,
        'date':new Date().getDate()
    })
    Alert.alert('Profile Updated Successfully')
}

playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:"http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3"
      },
      {
        shouldPlay:true
      }
    )
 }*/

 addDetails=(emailId)=>{
    firebase.auth().signInWithEmail(emailId)
    .then(()=>{
        db.collection('membersDetails').add({
            first_name:this.state.firstName,
            last_name:this.state.lastName,
            contact:this.state.contact,
            email_id:this.state.emailId,
            address:this.state.address
        })
        return Alert.alert('Details Added Succesfully','',[{text:'Ok',onPress:()=>this.setState({'isModalVisible':false})}])
    })
    .catch (function(error){
        var errorCode = error.code
        var errorMessage=error.message
        return Alert.alert(errorMessage)
    })
 
}
    
    render(){
        return(
            <ScrollView>
           
            <KeyboardAvoidingView style={styles.container}>
                <MyHeader title="Temperature and Oximeter" navigation ={this.props.navigation}/>
                <View style={styles.formContainer}>
                <View style={styles.imageView}>
                      <Image source={require("../assets/temperature.jpg")}
                         style={styles.tempImage}/>
                  </View>

                    <Text style={styles.label1}>           Age        </Text>
                    <TextInput
                       style={styles.formTextInput1}
                       keyboardType={'name-phone-pad'}
                      // placeholder={'Age'}
                       maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               age:text
                           })
                       }}
                       value={this.state.age}
                       />

                    <Text style={styles.label2}>      Temperature  </Text>
                    <TextInput
                       style={styles.formTextInput2}
                       keyboardType={'name-phone-pad'}
                       maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               temperature:text
                           })
                       }}
                       value={this.state.temperature}
                       />

                <Text style={styles.label3}>       Oxygen Level  </Text>
                <TextInput
                       style={styles.formTextInput3}
                       keyboardType={'name-phone-pad'}
                       maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               oxygenLevel:text
                           })
                       }}
                       value={this.state.oxygenLevel}
                       />

                    <Text style={styles.label4}>      Blood Pressure  </Text>
                    <TextInput
                       style={styles.formTextInput4}
                       keyboardType={'name-phone-pad'}
                       maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               bloodPressure:text
                           })
                       }}
                       value={this.state.bloodPressure}
                       />

                <Text style={styles.label5}>           Sugar  </Text>
                    <TextInput
                       style={styles.formTextInput5}
                       keyboardType={'name-phone-pad'}
                       maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               sugar:text
                           })
                       }}
                       value={this.state.sugar}
                       />

                       <TouchableOpacity style={styles.button}
                         onPress={()=>{
                            this.addDetails(this.state.emailId)
                         }}>
                             <Text style={styles.buttonText}>Save</Text>
                         </TouchableOpacity>
                </View>
                <View style={styles.imageView}>
                      <Image source={require("../assets/temperature2.png")}
                         style={styles.tempImage2}/>
                  </View>
           </KeyboardAvoidingView>
           </ScrollView>
        )
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'lightcoral'
    },
    button:{
        width:'100%',
        height:RFValue(60),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFValue(50),
        backgroundColor:'#32867d',
        shadowColor:'#000',
        shadowOffset:{width:0,height:0},
        shadowOpacity:0.44,
        shadowRadius:10.32,
        elevation:16,
        marginTop:20,
        marginLeft:RFValue(200)
    },
    formTextInput1:{
        width:'90%',
        height:RFValue(50),
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:2,
        borderWidth:1,
        padding:RFValue(10),
        marginLeft:RFValue(25)
    },
    formTextInput2:{
        width:'90%',
        height:RFValue(50),
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:2,
        borderWidth:1,
        padding:RFValue(10),
        marginLeft:RFValue(25)
    },
    formTextInput3:{
        width:'90%',
        height:RFValue(50),
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:2,
        borderWidth:1,
        padding:RFValue(10),
        marginLeft:RFValue(25)
    },
    formTextInput4:{
        width:'90%',
        height:RFValue(50),
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:2,
        borderWidth:1,
        padding:RFValue(10),
        marginLeft:RFValue(25)
    },
    formTextInput5:{
        width:'90%',
        height:RFValue(50),
        alignSelf:'center',
        borderColor:'grey',
        borderRadius:2,
        borderWidth:1,
        padding:RFValue(10),
        marginLeft:RFValue(25)
    },
    formContainer:{
        flex:0.88,
        justifyContent:'center'
    },
    buttonText:{
        color:'#ffff',
        fontWeight:'200',
        fontSize:20
    },
    label1:{
        fontSize:18,
        color:'#717d7e',
        fontWeight:'bold',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:RFValue(140),
        marginBottom:RFValue(20)
    },
    label2:{
        fontSize:18,
        color:'#717d7e',
        fontWeight:'bold',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:RFValue(140),
        marginBottom:RFValue(20)
    },
    label3:{
        fontSize:18,
        color:'#717d7e',
        fontWeight:'bold',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:RFValue(140),
        marginBottom:RFValue(20)
    },
    label4:{
        fontSize:18,
        color:'#717d7e',
        fontWeight:'bold',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:RFValue(140),
        marginBottom:RFValue(20)
    },
    label5:{
        fontSize:18,
        color:'#717d7e',
        fontWeight:'bold',
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:RFValue(140),
        marginBottom:RFValue(20)
    },
    tempImage:{
        width:RFValue(100),
        height:RFValue(85),
        resizeMode:'stretch',
        marginRight:RFValue(300),
        borderColor:'black',
    },
    tempImage2:{
        width:RFValue(100),
        height:RFValue(100),
        resizeMode:'stretch',
        marginLeft:RFValue(300),
        borderColor:'black'
    }
})
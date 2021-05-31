import React, { Component } from "react";
import {StyleSheet,View,Text,Image,TextInput,ScrollView} from "react-native";
import db from '../config';
import firebase from'firebase';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import {Title,Color,Size,SoundUrl} from 'react-native';
import {Audio} from 'expo-av';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class HomeScreen extends Component {
    
    constructor(){
        super();
        this.state={
            userId:firebase.auth().currentUser.email,
            name:'',
            age:'',
            temperature:'',
            oxygenLevel:'',
            date:'',
            bloodPressure:'',
            sugar:''
        }
    }
    
        componentDidMount(){
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
     }
    

render(){
  return (
      <ScrollView>
    <View style={styles.container}>
    <MyHeader title="Important Parameters" navigation ={this.props.navigation}/>
      <View style={styles.ageRow}>
        <Text style={styles.age}>Age</Text>
        <Image
          source={require("../assets/ageIcon.png")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
        <TextInput 
        style={styles.placeholder}
        maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               age:text
                           })
                       }}
                       value={this.state.age}
        />
      </View>
      <View style={styles.temperatureRow}>
        <Text style={styles.temperature}>Temperature</Text>
        <Image
          source={require("../assets/temperatureIcon.png")}
          resizeMode="contain"
          style={styles.image2}
        ></Image>
        <TextInput  
        style={styles.placeholder2}
        maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               temperature:text
                           })
                       }}
                       value={this.state.temperature}
        />
      </View>
      <View style={styles.oxygenLevelRow}>
        <Text style={styles.oxygenLevel}>Oxygen Level</Text>
        <Image
          source={require("../assets/oxygenLevelIcon.jpg")}
          resizeMode="contain"
          style={styles.image3}
        ></Image>
        <TextInput 
        style={styles.placeholder3}
        maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               oxygenLevel:text
                           })
                       }}
                       value={this.state.oxygenLevel}/>
      </View>
      <View style={styles.bloodPressureRow}>
        <Text style={styles.bloodPressure}>Blood Pressure</Text>
        <Image
          source={require("../assets/bpIcon.png")}
          resizeMode="contain"
          style={styles.image4}
        ></Image>
        <TextInput
        style={styles.placeholder4}
        maxLength={3}
                       onChangeText={(text)=>{
                           this.setState({
                               bloodPressure:text
                           })
                       }}
                       value={this.state.bloodPressure}
        />
      </View>
      <View style={styles.sugarRateRow}>
        <Text style={styles.sugarRate}>Sugar Rate</Text>
        <Image
          source={require("../assets/sugarIcon.png")}
          resizeMode="contain"
          style={styles.image5}
        ></Image>
        <TextInput
        style={styles.placeholder5}
        maxLength={3}
        onChangeText={(text)=>{
            this.setState({
                sugar:text
            })
        }}
        value={this.state.sugar}/>
      </View>
      <View>
          <TouchableOpacity style={styles.button}
            onPress={()=>{
                this.updateUserDetails()
            }}>
                <Text style={styles.buttonText}>SAVE</Text>
            </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button:{
    width:'30%',
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
    marginLeft:RFValue(120)
},
  age: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    textAlign: "justify",
    marginTop: 18
  },
  image: {
    width: 75,
    height: 75,
    marginLeft: 110
  },
  placeholder: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 53,
    width: 94,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 10,
    marginTop: 11
  },
  ageRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 119,
    marginLeft: 22,
    marginRight: 6
  },
  temperature: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 22
  },
  image2: {
    width: 75,
    height: 75,
    marginLeft: 27
  },
  placeholder2: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 53,
    width: 94,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 12,
    marginTop: 11
  },
  temperatureRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 19,
    marginLeft: 17,
    marginRight: 6
  },
  oxygenLevel: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 22
  },
  image3: {
    width: 75,
    height: 75,
    marginLeft: 18
  },
  placeholder3: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 53,
    width: 94,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 10,
    marginTop: 11
  },
  oxygenLevelRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 17,
    marginRight: 6
  },
  bloodPressure: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    marginTop: 22
  },
  image4: {
    width: 75,
    height: 75
  },
  placeholder4: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 53,
    width: 94,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    borderWidth: 1,
    borderColor: "#000000",
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 10,
    marginTop: 11
  },
  bloodPressureRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 15,
    marginLeft: 18,
    marginRight: 6
  },
  sugarRate: {
    fontFamily: "roboto-700",
    color: "#121212",
    fontSize: 25,
    textAlign: "center",
    marginTop: 23
  },
  image5: {
    width: 75,
    height: 75,
    marginLeft: 49
  },
  placeholder5: {
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 53,
    width: 94,
    fontSize: 25,
    borderWidth: 1,
    borderColor: "#000000",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    backgroundColor: "rgba(255,255,255,1)",
    marginLeft: 0,
    marginTop: 11
  },
  sugarRateRow: {
    height: 75,
    flexDirection: "row",
    marginTop: 18,
    marginLeft: 18,
    marginRight: 6
  },
  scrollArea: {
    width: 188,
    height: 88,
    backgroundColor: "rgba(126,211,33,1)",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 34,
    marginLeft: 87
  },
  scrollArea_contentContainerStyle: {
    height: 88,
    width: 188
  },
  save: {
    fontFamily: "roboto-regular",
    color: "#121212",
    fontSize: 35,
    marginTop: 23,
    marginLeft: 57
  }
});
import React, { Component } from 'react';
import { StyleSheet, Text, View,TextInput,Image,TouchableOpacity ,Modal,ScrollView,KeyboardAvoidingView, Alert} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import MyHeader from '../components/MyHeader';
import {Title,Color,Size,SoundUrl} from 'react-native';

export default class SuggestionsScreen extends Component{

    render(){
        return(
            <ScrollView>
            <View>
                 <MyHeader title="Suggestions" navigation ={this.props.navigation}/>
                 <Text style={styles.heading}>
                     6 Must-Do’s Post COVID-19 Recovery!:
                 </Text>
                 <Text style={styles.content}>1. Take rest</Text>
                 <Text style={styles.content}>2. Have a nutritious diet</Text>
                 <Text style={styles.content}>3. Exercise a little every day</Text>
                 <Text style={styles.content}>4. Play a few memory games</Text>
                 <Text style={styles.content}>5. Check your blood oxygen level</Text>
                 <Text style={styles.content}>6. Watch out for other symptoms</Text>
                 <Text style={styles.content}></Text>
                 <Text style={styles.content}></Text>

                 <Text style={styles.heading}>
                    Food and nutrition tips during self quarantine:
                 </Text>

                 <Text style={styles.content}>1. Make a plan - take only what you need </Text>
                 <Text style={styles.content}>2. Be strategic about the use of ingredients - prioritize fresh products</Text>
                 <Text style={styles.content}>3. Prepare home-cooked meals </Text>
                 <Text style={styles.content}>4. Take advantage of food delivery options</Text>
                 <Text style={styles.content}>5. Be aware of portion sizes </Text>
                 <Text style={styles.content}>6. Follow safe food handling practices </Text>
                 <Text style={styles.content}>7. Limit your salt,  sugar and fat intake</Text>
                 <Text style={styles.content}>8. Consume enough fibre </Text>
                 <Text style={styles.content}>9. Stay hydrated</Text>
                 <Text style={styles.content}>10. Avoid alcohol or at least reduce your alcohol consumption </Text>
                 <Text style={styles.content}>11. Enjoy family meals </Text>
                 <Text style={styles.content}></Text>
                 <Text style={styles.content}></Text>

                 <Text style={styles.heading}>WEAKNESS POST COVID?</Text>
                 <Text style={styles.heading}>HERE'S WHAT TO DO </Text>
                 <Text style={styles.content}>1. Go easy on exercise. Start with slow walks, breathing exercise & meditation. Your body needs rest. No intense workout. </Text>
                 <Text style={styles.content}>2. Get 30 mins morning sunlight daily. </Text>
                 <Text style={styles.content}>3. Have 1 date, handful of raisins, 2 almonds, 2 walnuts in morning (all soaked overnight).</Text>
                 <Text style={styles.content}>4. Eat light & easy to digest food like lentil soups & rice gruel. Avoid excessive sugar, fried & processed food.  </Text>
                 <Text style={styles.content}>5. Have nourishing khichdi on alternate days. </Text>
                 <Text style={styles.content}>6. Drink Moringa soup (2-3 times a week). </Text>
                 <Text style={styles.content}>7. Have CCF tea twice a day 1 hour post meals. </Text>
                 <Text style={styles.content}>8. Sleep early every night. The better you sleep, the quicker you heal. </Text>
            </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    heading:{
        fontSize:RFValue(20),
        color:'#FF0000',
        justifyContent:'center'
    },
    content:{
        fontSize:RFValue(15),
        color:'#006400',
        justifyContent:'center' 
    }
})
import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { ScrollView, TextInput} from 'react-native-gesture-handler';

import ForYouComp from '../components/ForYouComp.js';
import SubscriptionComp from '../components/SubscriptionComp.js';
import FriendsComp from '../components/FriendsComp.js';
import QuickAdd from '../components/QuickAddComp.js'
import BottomCircle from '../components/bottomCircles.js'
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {


  return (
      <View style={{flex:1}}>
        <ScrollView>
        <View style={{margin:10}}>
          <Text style={{fontWeight:'bold', fontSize:20}}>Friends</Text>
        </View>
        <View style={{flex:.8, marginLeft:5}} >
        <FriendsComp/>
        </View>
        <View style={{flex:1}}>
         <QuickAdd/>
        </View>
        <View style={{flex:1}}>

          <View style={{flex:1,flexDirection:'row'}} >
            <SubscriptionComp/>
          </View>
        </View>
        <View style={{flex:1, backgroundColor:'#ffffff'}} >
          <View style={{flex:.5}}>
            <Text style={{fontWeight:'bold', fontSize:20}}> For You</Text>
          </View>
          <View style={{flexDirection:'row',flex:1}}>
            <ForYouComp/>
            <ForYouComp/>
          </View>
          <View>
            <BottomCircle/>
          </View>
        </View>
        </ScrollView>
      </View>
      
  );
}


HomeScreen.navigationOptions = {
  header: null,
};


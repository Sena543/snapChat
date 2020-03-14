import * as React from 'react';
import { Image, Text, View,TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


export default function Header(){
    return(
        <View style={{flex:1, flexDirection:'row'}}>
        <View style={{}}>
          <Image source={require('../assets/images/bit.jpg')} style={{height:50, width:50, borderRadius:60, marginBottom:10}}/>
        </View>
        <View style={{flex:1, flexDirection:'row', justifyContent:'space-between',alignItems:'center', margin:15, borderWidth:.1, backgroundColor:'#bdbdbd', borderRadius:10}} > 
        <Ionicons name='ios-search' size={30} style={{margin:5}}/> 
          <View>
            <Text style={{color:'#858585', fontSize:20, marginRight:70}}>Search</Text>
          </View>
        <Ionicons name='ios-person-add' size={30} style={{margin:5}}/>
        </View>
        <View style={{justifyContent:'center'}}>
          <Ionicons name='ios-more' size={40} style={{marginRight:20}}/>
        </View>
      </View>
    )
}

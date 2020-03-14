import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function SubscriptionComp(){

    const subData = [
        {id:1, name:'Origi', imagePath:require('../assets/images/origi.jpeg')},
        {id:2, name:'Messi', imagePath:require('../assets/images/messi.jpg')},
        {id:3, name:'Ronaldo', imagePath:require('../assets/images/ronaldo.jpg')},
        {id:4, name:'Klopp', imagePath:require('../assets/images/klop.jpg')},
        {id:5, name:'Setien', imagePath:require('../assets/images/setien.jpg')},
        {id:6, name:'Suarez', imagePath:require('../assets/images/suarez.jpg')},
      ];

    const SubList = ({path, name})=>{
       return(
          <View style={{height:150}}>
            <TouchableOpacity>
              <ImageBackground source={path} style={{height:120, width:80, justifyContent:'flex-end', marginLeft:10}} imageStyle={{borderRadius:10,}}>
                <View>
                  <Text style={{color:'#ffffff', marginLeft:3, fontWeight:'bold', marginBottom:15}}>{name}</Text>  
                </View>
              </ImageBackground>
              </TouchableOpacity>
          </View>
        )
      }

      return(
        <View>
          <View style={{flexDirection:'row'}}>
              <Text style={{fontSize:20, fontWeight:'bold', marginTop:10, marginLeft:5, marginBottom:5}}>Subscriptions</Text>
              <Text style={{color:'#a6a5a8', fontWeight:'bold', marginLeft:5, marginTop:10, fontSize:20, marginBottom:5}}> > </Text>
            </View>
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={subData}
          renderItem = { ({item})=> <SubList name={item.name} path={item.imagePath}/> }
          keyExtractor = {item=> item.id}
          />
        </View>
      )
    
}
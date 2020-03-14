import * as React from 'react';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function ForYouComp(){

    const forYouData= [
        {id:1, imagePath:require('../assets/images/messi.jpg'), name:'Lionel'},
        {id:2, imagePath:require('../assets/images/ronaldo.jpg'), name:'Banner'},
        {id:3, imagePath:require('../assets/images/setien.jpg'), name:'RDJ'},
        {id:4, imagePath:require('../assets/images/joker.jpg'), name:'Ronaldo'},
      ]

   const ForYouList = ({path, name})=>{
    return(
      <View style={{flex:1}}>
        <TouchableOpacity>
        <ImageBackground source={path} style={{flex:.56, height:300, width:180, margin:5, justifyContent:'flex-end'}} imageStyle={{flex:.5, borderRadius:10}}>
          <View>
            <Text style={{color:'#ffffff', marginLeft:3, fontWeight:'bold', fontSize:20}}>{name}</Text>  
          </View>
        </ImageBackground> 
        </TouchableOpacity>
        </View>
    )
  }

  return(
      <View>
          <FlatList
              data={forYouData}
              renderItem= { ({item})=> <ForYouList path={item.imagePath} name={item.name}/> }
            />
      </View>
  )
}
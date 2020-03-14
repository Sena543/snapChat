import * as React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';


export default function FriendsComp(){
    const friendsData = [
        {id:1, imagePath:require('../assets/images/joker.jpg'), name:'Joker'},
        {id:2, imagePath:require('../assets/images/man.jpg'), name:'Stark'},
        {id:3, imagePath:require('../assets/images/thor.jpg'), name:'Thor'},
        {id:4, imagePath:require('../assets/images/hulk.jpg'), name:'Banner'},
        {id:5, imagePath:require('../assets/images/batman.jpg'), name:'Dudette'},
      ];

      const FriendsList = ({name, path})=>{
        return(
            <TouchableOpacity>
            <View>
            <View style={{margin:5,backgroundColor:'#9e5ff5', height:90, width:90, alignItems:'center', justifyContent:'center', borderRadius:60}}>
                <View style={{backgroundColor:'#ffffff', height:85, width:85, alignItems:'center', justifyContent:'center', borderRadius:60}}>
                <Image source={path} style={{height:80, width:80, borderRadius:60}}/>
                </View>
            </View>
            <View style={{alignItems:'center'}}>
                <Text>{name}</Text>
            </View>
            </View>
        </TouchableOpacity>      
        )
      }

    return(
        <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={friendsData}
        renderItem = { ({item})=> <FriendsList name={item.name} path={item.imagePath} />}
        keyExtractor={ item => item.id}
        />
    )
}
import * as React from 'react';
import {Text, View, Image, TouchableOpacity } from 'react-native';


export default function QuickAdd(){
    return(
        <View>
        <View style={{margin:10}}>
            <Text style={{fontWeight:'bold', fontSize:20}}>Quick Add</Text>
        </View>
        <View style={{flex:0.7, marginLeft:5, backgroundColor:'#ffffff', flexDirection:'row', justifyContent:'space-between'}}>
        <TouchableOpacity>
            <View style={{marginTop:10, marginLeft:10,backgroundColor:'#9e5ff5', height:85, width:85, alignItems:'center', justifyContent:'center', borderRadius:60}}>
                <View style={{backgroundColor:'#ffffff', height:80, width:80, alignItems:'center', justifyContent:'center', borderRadius:60}}>
                    <Image source={require('../assets/images/batman.jpg')} style={{height:75, width:75, borderRadius:60}}/>
                </View>
            </View>
        </TouchableOpacity>
        <View style={{justifyContent:'center', flex:1}}>
            <Text style={{fontWeight:'bold', marginLeft:10}}>Nass</Text>
            <Text style={{marginLeft:10}}>Lalana</Text>
        </View>
        <View style={{alignItems:'flex-end', justifyContent:'center', marginRight:10}}>
            <TouchableOpacity>
                <View style={{backgroundColor:'#9e5ff5', height:30, width:50, borderRadius:20, alignItems:'center' ,justifyContent:'center'}}>
                    <Text style={{color:'#ffffff', fontWeight:'bold'}}>+ Add</Text>
                </View>
            </TouchableOpacity>
            </View>
        </View>
    </View>
    )
}
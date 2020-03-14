import * as React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { RectButton, ScrollView, FlatList, TouchableOpacity } from 'react-native-gesture-handler';

export default function LinksScreen() {

  const listData=[
    {name:'esssien53', image:require('../assets/images/robot-dev.png')},
    {name:'hulk', image:require('../assets/images/hulk.jpg')},
    {name:'Wayne', image:require('../assets/images/batman.jpg')},
    {name:'messi', image:require('../assets/images/messi.jpg')},
    {name:'ronaldo', image:require('../assets/images/ronaldo.jpg')},
    {name:'hemsworth', image:require('../assets/images/thor.jpg')},
  ]


  const ChatList = ({name, path})=>{
    return(
      <TouchableOpacity>
        <View style={{flexDirection:'row', borderWidth:.18, borderWidthColor:'#bdbebf'}}>
          <View style={{height:100, width:50, margin:20, borderRadius:50}}>
              <Image source={path} size={20} style={{height:80, width:80, borderRadius:50}}/>
          </View>
        <View style={{flex:1,  justifyContent:'center', marginLeft:20}}>
          <Text style={{fontWeight:'bold', fontSize:20, marginBottom:10}}>{name}</Text>
          <View style={{flexDirection:'row'}}>
            <Ionicons name='ios-chatboxes' size={20} style={{}}/>
          <Text style={{color:'#bdbebf'}}> Tap to chat</Text>
        </View>
        </View>
      </View>
    </TouchableOpacity>
    )
  }




  return (
    <ScrollView>
      <View style={{flex:1}}>
        <FlatList
        data={listData}
        renderItem= {({item})=> <ChatList name={item.name} path={item.image}/>}
        />
      </View>
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});

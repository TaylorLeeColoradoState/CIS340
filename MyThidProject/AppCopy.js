import React from 'expo-status-bar';
import {  Text, TextInput, View } from 'react-native';

function Student(props) {
  return (
    <View >
      <Text> Hey my name is {props.name}, I am student in CIS340 </Text>
    </View>
  );
}

export default function Multicomponent()
{
  return(
    <View style = {{
      flex: 1,
      justifyContent: "center",
      alignItems: "center"

    }}> 
      <Text> Welcome to CIS340</Text>
      <Student name = "Taylor Lee"/> 
      <Student name = "Shen Won" />
      <Student name = "Oresten Ester"/> 
      <Student name = "Jack Kullem"/>
    </View>
  )
}

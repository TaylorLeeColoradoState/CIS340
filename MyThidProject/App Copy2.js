import React from 'expo-status-bar';
import {  Text, Image, View } from 'react-native';

export default function CatApp() {
  
  return (
    <View >
      <Image source = "https://raw.githubusercontent.com/TaylorLee/CIS340/master/images/dog2.png"
      style = {{width: 200, height: 200}}></Image> 
      <Text> Hello, I am your cat</Text>
    </View>
  );
}

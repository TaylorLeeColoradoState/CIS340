import React,{useState} from 'react';
import {  Text, View, Button } from 'react-native';

function TV(){
  const[isOff, setIsOff] = useState(true);
  return (
  <View> {"\n\n\n"}
  <Text>
    This is {clickProps.name} TV, and it is {osOff ? "OFF" : "Turn Me On"}

  </Text>
  <Button
  onPress = {() =>{
    setIsOff(false);

  }}
  disabled={!isOff}
  title ={isOff ? "Turn Me On please" : "thank you"}> </Button>
  </View>
  );
}

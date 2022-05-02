import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableObject, image } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  return (
    <View style={styles.container}>
       <image source = {{url: ''}}
       style = {styles.logo}/>

      <Text style = {styles.inits}> Press the button below to select images on your phone</Text>
   
      <TouchableOpacity style = {style.container} onPress = {() => alert('you have not slected an image yet')}>
        
        <Text style= {styles.buttonText} > pick image </Text>

      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#FFFFE0'
  },
  button: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FFFFE0'
  },
  insts:{
    fontSize: 18,
    color: '#FFFFE0',
    marginHorizontal: 15,
    marginBottom: 20
  },
  logo:{
    width: 310,
    height: 300,
    marginBottom: 20

  },
  buttonText:{
    fontSize: 20,
    color: '#FFFFE0'
  }

});

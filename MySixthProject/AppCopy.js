import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

export default function App() {
 const csuLogo = {
   url: 'https://rawgithubusercontent.com/image',
   width: 80,
   height: 80

 };


 
  return (
    <View style={styles.container}>

      <Image
    style = {style.localCSULogo}
    source = {require('./assets/logopng')}

    />  


    <Image
    style = {styles.stretchLogo}
    source =  {{ url: "https://rawgithubusercontent.com/CIS340/mater/images/csulogo.png"}}/>

</View>

  );
  }

const styles = StyleSheet.create({
  container: {
paddingTop: 50,
  },

  localCSULogo:{
    width: 55,
    height: 65,
  },
  urlCSULogo:{
    width: 50,
    height: 50,

  },

  stretch: {
  
    height: 200,
    resizeMode: 'center',

  }
  }
);

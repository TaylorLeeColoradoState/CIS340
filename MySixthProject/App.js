import React from 'react';
import { StyleSheet, Text, View, ImageBackground} from 'react-native';

export default function App() {
 const csuLogo = {
   url: 'https://rawgithubusercontent.com/image',
   width: 80,
   height: 80

 };


 
  return (
    <View style={styles.container}>
      <ImageBackground source = {csuLogo} style = {styles.image}>
      <Text style = {styles.text}> CSU Logo </Text>

      </ImageBackground>


</View>

  );
  }

const styles = StyleSheet.create({
  container: {
flex: 1,
flexDirection: "row",
  },

  image:{
    flex: 1,
    resizemode: 'cover',
    justifyContent: 'center'
  },
  text:{
    color: ReactDOM,
    fontSize: 40,
    fontWeight: 'bold',
    

  },


  }
);

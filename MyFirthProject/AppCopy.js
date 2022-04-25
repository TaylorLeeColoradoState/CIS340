import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {style.yellow}>Just yellow text!</Text>
      <Text style = {style.largGreen}>This is big Green text!</Text>
      <Text style = {[style.yellow, style.largGreen]}> yellow text, then big green text!</Text>
      <Text style = {[ style.largGreen,style.yellow]}> big green text, then yellow text!</Text>
    </View>
  );
}

const styles = StyleSheet.create({

container: {
  marginTop: 60

},

largGreen: {
  color: 'green',
  fontWeight: 'bold', 
  fontSize: 30,

},

yellow: {
  color: 'yellow',
  fontSize: 20,

}
});

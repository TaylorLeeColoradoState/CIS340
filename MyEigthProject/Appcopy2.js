import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableObject } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default class myApp extends Component {
  constructor(props){
    super(props);
    this.state = {count:0};
  }

  onTap = () => {
    this.setState({
      count: tjis.state.count +1
    })
  }
    render(){
      const{count} = this.state;
    


  return (
    <View style={styles.container}>
       <View style={styles.counterText}>
      <Text>Tap Coumter: {count} </Text>
      </View>
      <TouchableOpacity
        style= {style.container}
        onPress = {onTap}
        >
          <Text> Touch Me</Text>
        </TouchableOpacity>
    </View>
  );
}
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
});

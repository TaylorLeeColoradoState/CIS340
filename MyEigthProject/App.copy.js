import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableObject } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const[count,setcount] = useState(0);

  const onTap = () => setcount(count=> count+1);


  return (
    <View style={styles.container}>
       <View style={styles.counterText}>
      <Text>Yap Coumter: {count} </Text>
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

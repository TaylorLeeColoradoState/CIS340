import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component() {
 _onPressButoon(){
   alert(' you tapped button')
 }
  render(){}
  return (
    
    <View style={styles.container}>
          <View style={styles.containerButton}>
            <Button
            onPress= {(this._on) => {
              alert('you tapped a button');

            }}
            title = 'Pess Button'
/>
<View style = {StyleSheet.containerLayourButton}></View>

<Button
            onPress= {() => {
              alert('you tapped a button');

            }}
            title = 'Pess Button'
/>
<Button
            onPress= {() => {
              alert('you tapped a button');


            }}
            title = 'Great'
            color = 'green'
            
/>
<View style = {StyleSheet.containerLayourButton}></View>

<Button
            onPress= {() => {
              alert('you tapped a button');

            }}
            title = 'Tap Me'
/>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  containerButton: {
    margin: 20,
  },
  containerLayoutButton: {
    margin: 20,
    flexDirection: 'raw',
    justifyContent: 'space-between',
  }
  },

);
}

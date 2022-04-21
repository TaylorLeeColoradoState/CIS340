import React from 'react';
import {Text, View, SectionList } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';




 export default StatesApp = () => {
  return(
    <View style = {{flex: 1, paddinghTop: 22}}>
      <SectionList
      sections= {[{title: 'A', data: ['Alabma', 'Alaska', 'Arkansas', 'Arizona']},
      {title: 'C', data: [ 'Conetticut', 'Colorado', 'Califonia']},
      {title: 'D', data: ['Deleware']},
      {title: 'F', data: ['flordia']}
      ]}
      renderItem = {({item}) => <Text style = {{padding: 10, fontSize: 10, height: 20}}> {item} </Text>}

      renderSections = {({section}) => <Text style={{paddingToip:4, paddingLeft: 10,
         paddingRight: 10,paddingBottom: 4, fontSize:14, fontWeight: 'bold',
        backgroundColor: '#8BC7F7'}}> {section.title} </Text>}
        keyExtractor = {(item,index) =>index}

      />
    
    </View>
  
   
 );
 }

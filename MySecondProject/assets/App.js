@ -0,0 +1,34 @@
import React from 'react';
import { Text,TextInput, View } from 'react-native';

 function MyApp() {
  return (
    <View>
      <Text>
        Hello I am a student in CIS340!
      </Text>
    </View>

  );
}

export default function MultiComp()
{ 
  
  return(
    <View stye = {{
      flex: 1,
      justifyContent: "Center",
      alignItems: "center",
    }}>
      <Text> Welcome to my class </Text>
      <MyApp />
      <MyApp />
      <MyApp />
      <MyApp />

    </View>


  )
}

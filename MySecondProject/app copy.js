import { React } from 'react';
import { Text,TextInput, View } from 'react-native';

export default function MyApp() {

  function getFullName(fname,mname,lname)
  {
    return fname + " " + mname + " " + lname;
  }

const pet = "Dog";
  return (
<view>
      <Text>
        {"\n\n\n\n\n\n"}
        Hello I am a student in CIS340!

        </Text>
        <TextInput 
        style = { {
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
        }}
        defaultValue = "Enter Input"/>
</view>
  );
}

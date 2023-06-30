import React, { Component, useState } from 'react';
import { View, Text,Button,Alert, TouchableOpacity, StyleSheet } from 'react-native';

//Any component that renders other components is a parent component. Here, App is the parent component and Calculator is a child component.

import Calculator from './components/calculator';
import Jsx from './components/jsx';
import Components  from './components/components';
import Props from './components/Props';
import OnPress from "./components/onPress";



 const App = () => {
  const age = 30;
  const hobbies = ['Reading', 'Gardening', 'Cooking'];

  const [name,setName] = useState("John Doe");


  return (
    <View>
      
      <Button title='Change Name' onPress={()=>{setName("sakib")}}/>
      <Props Name={name} Age = {age}  Hobby= {hobbies}/>

    </View>
  )
  // return <Calculator/>
  // return <Jsx/>
  // return <Components/>
  // return <OnPress/>
  
};

export default App;
















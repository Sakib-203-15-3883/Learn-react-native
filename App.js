import React, { Component, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
//Any component that renders other components is a parent component. Here, App is the parent component and Calculator is a child component.

import Calculator from './components/calculator';
import Jsx from './components/jsx';
import Components  from './components/components';
// import Props from './components/Props';

 const App = () => {
//   const name = 'John Doe';
//   const age = 30;
//   const hobbies = ['Reading', 'Gardening', 'Cooking'];

  // return <Calculator/>
  // return <Jsx/>
  return <Components/>
  
};

export default App;







// import CustomComponent from './components/CustomComponent';

// import Information from './components/information';





// Here, a functional component named App is defined. It uses an arrow function syntax (() => {}) to define the component. The component returns JSX code wrapped inside a View component, which acts as a container for other components.

// Inside the View, there are three Text components, each with different font sizes (50, 30, and 20). They contain the text content you provided as a message for your first React app.

//JSX (JavaScript XML) is an extension to JavaScript syntax that allows you to write HTML-like code within JavaScript. It's a syntax extension used in React (including React Native) to describe the structure and appearance of UI components.Any JavaScript expression will work between curly braces, including function calls.

// const App = ()=>{
//   const name = 'Sakib ';
//   const handlePress = () => {
//     Alert.alert('Button Pressed!');
//     // Perform additional actions or logic here
//   };
//   return (

//     ////////////                REACT NATIVE CORE  UI COMPONENTS        //////////////////////////



//     //<View> (A non-scrolling div) : A container that supports layout with flexbox, style, some touch handling, and accessibility controls

//     //<Text>(p) : Displays, styles, and nests strings of text and even handles touch events

//     //<Image> (image):Displays different types of images

//     //<ScrollView> (div) : A generic scrolling container that can contain multiple components and views

//     //<TextInput> (<input type="text">) : Allows the user to enter text
    
//     <View>
//       <Text style={{ fontSize: 50 }}>hello {name} </Text>
//       <Button title="Press here" onPress={() => console.log('Button pressed')} />
      
//       <Button title="Press here Again" onPress={() => console.log('Button pressed Again')} />
//       <Text style={{fontSize:40}}>Office data</Text>
//       <CustomComponent />
//       <Information />
//       <calculator/>
   
//     <View>
//       <Button title="Press Me" onPress={handlePress} />
//     </View>
  

//     </View>
//   )

  
// }

// This line exports the App component as the default export of the module, which allows it to be imported and used in other parts of your application.
















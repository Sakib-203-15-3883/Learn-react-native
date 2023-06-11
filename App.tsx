import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

const name ="Sakib ";

const email = ()=>{

const value = "junaedjunaed25@gmail.com";
  return value;
}



// Here, a functional component named App is defined. It uses an arrow function syntax (() => {}) to define the component. The component returns JSX code wrapped inside a View component, which acts as a container for other components.

// Inside the View, there are three Text components, each with different font sizes (50, 30, and 20). They contain the text content you provided as a message for your first React app.

//JSX (JavaScript XML) is an extension to JavaScript syntax that allows you to write HTML-like code within JavaScript. It's a syntax extension used in React (including React Native) to describe the structure and appearance of UI components.

const App = ()=>{
  return (

    ////////////                REACT NATIVE CORE  UI COMPONENT        //////////////////////////



    //<View> (A non-scrolling div) : A container that supports layout with flexbox, style, some touch handling, and accessibility controls

    //<Text>(p) : Displays, styles, and nests strings of text and even handles touch events

    //<Image> (image):Displays different types of images

    //<ScrollView> (div) : A generic scrolling container that can contain multiple components and views

    //<TextInput> (<input type="text">) : Allows the user to enter text

    <View>
    <Text style={{fontSize:50}}>hello {name} </Text> 


    <Button title="Press here" onPress={() => console.log('Button pressed')} />


    <Text style={{fontSize:20}}> My Email :{email()}  </Text> 

    <Button title="Press here Again" onPress={() => console.log('Button pressed Again')} />

    </View>
  )
}



// This line exports the App component as the default export of the module, which allows it to be imported and used in other parts of your application.



export default App;






import React from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';



// Here, a functional component named App is defined. It uses an arrow function syntax (() => {}) to define the component. The component returns JSX code wrapped inside a View component, which acts as a container for other components.

// Inside the View, there are three Text components, each with different font sizes (50, 30, and 20). They contain the text content you provided as a message for your first React app.

//JSX (JavaScript XML) is an extension to JavaScript syntax that allows you to write HTML-like code within JavaScript. It's a syntax extension used in React (including React Native) to describe the structure and appearance of UI components.

const App = ()=>{
  return (
    <View>
    <Text style={{fontSize:50}}>Welcome to My First React App!</Text> 

    <Text style={{fontSize:30}}>In this app, i will learn the fundamentals of React, including components, state, and props. i will discover how to structure our code, manage data, and handle user events. </Text> 

    <Button title="Press here" onPress={() => console.log('Button pressed')} />


    <Text style={{fontSize:20}}>Enjoying  the process of building our React app, and have fun discovering the endless possibilities of this powerful JavaScript library! </Text> 

    <Button title="Press here Again" onPress={() => console.log('Button pressed Again')} />

    </View>
  )
}



// This line exports the App component as the default export of the module, which allows it to be imported and used in other parts of your application.

export default App;

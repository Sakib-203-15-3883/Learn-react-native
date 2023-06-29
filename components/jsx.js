//JSX (JavaScript XML) is an extension to JavaScript that allows you to write HTML-like syntax within your JavaScript code. It is a syntax extension used in React and React Native to define the structure and appearance of user interfaces. JSX makes it easier to describe how components should look and behave.

import React from 'react';
import {View, Text, StyleSheet,Button} from 'react-native';

//JSX Expressions and Dynamic Values:

const email = () => {
  const value = 'junaedjunaed25@gmail.com';
  return value;
};


//Rendering JSX Conditionally


const Information = () => {
  const isLoggedIn = false;
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My Email: {email()} </Text>

      {isLoggedIn ? (<Text>Welcome back!</Text>) : (<Button title = "Please log in"/>)}
    </View>
  );
};


//Styling JSX Elements  using the style prop. 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Information;

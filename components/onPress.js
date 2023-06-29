// In React Native, the Button component is a pre-styled component that represents a standard button in the user interface. It provides a simple way to create buttons with basic functionality, such as triggering an action when pressed. The Button component is part of the react-native library and can be imported as follows:
import React from 'react';
import {Button, Text, View, Alert} from 'react-native';

//The Button component accepts several props to customize its appearance and behavior. The most commonly used prop is onPress, which defines the function to be executed when the button is pressed.

const button = () => {
  return (
    <Button
      title="onPress"
      onPress={() => {
        const num2 = 500;

        console.warn(num2);
      }}
    />
  );
};

export default button;

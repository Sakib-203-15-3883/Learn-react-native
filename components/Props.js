//In React Native, when a component's state or props change, it triggers a re-rendering of that component and its child components. This re-rendering process is known as reconciliation.

//In React Native, props  are used to pass data from a parent component to a child component. They allow you to customize the behavior and appearance of the child component based on the values received from the parent component. Props are read-only and cannot be modified by the child component.

// 1. Props Passing:

// Props are passed from a parent component to a child component by including them as attributes in the JSX element.
// The parent component supplies the values for the props, and the child component receives and uses them.

// 2  . Props Types:

// Props can have different types, such as strings, numbers, booleans, objects, arrays, or even functions.
// PropTypes can be used to define the expected types of props to ensure type safety and catch potential errors.

//  3. Accessing Props:

// Inside the child component, props can be accessed using the props object. Each prop value can be accessed using dot notation (props.propName).
// Props are read-only, meaning they cannot be modified directly within the child component. They are immutable and controlled by the parent component.

import React from 'react';
import { View, Text } from 'react-native';

const Props = (props) => {
  
    const { name, age, hobbies } = props;

  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Age: {age}</Text>
      <Text>Hobbies: {hobbies.join(', ')}</Text>
    </View>
  );
};

export default Props;

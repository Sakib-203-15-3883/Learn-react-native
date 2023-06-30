//There are two types of data state and props in React Native which control the component. The component that uses the state is mutable. They can be changed later on if required. The props component is immutable, and it is fixed throughout the lifetime

// state which stores the value for component. it,s mutable . we first initialize the sate in the constructor and then we call setState whenever we need to change the value .

//In React Native, when a component's state or props change, it triggers a re-rendering of that component and its child components. This re-rendering process is known as reconciliation.

import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  // Declare a state variable called 'count' and initialize it to 0
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to decrement the count
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
      <Button title="Decrement" onPress={decrementCount} />
    </View>
  );
};

export default Counter;

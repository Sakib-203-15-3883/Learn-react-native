// state which stores the value for component. it,s mutable . we first initialize the sate in the constructor and then we call setState whenever we need to change the value .  

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

// 1. Local Components:

// Local components, also known as nested components or child components, are defined within another component. They are typically used for encapsulating a specific part of the UI or for improving code organization and reusability within a parent component. Local components can be defined as functional components or class components.

import React from 'react';
import { View, Text } from 'react-native';

const ParentComponent = () => {
  const LocalComponent = () => {
    return (
      <View>
        <Text>This is a local component.</Text>
      </View>
    );
  };

  return (
    <View>
      <Text>Parent Component</Text>
      <LocalComponent />
    </View>
  );
};

export default ParentComponent;

// component is a reuseable and independent code like function but in component we write js code with html syntax .

//In React Native, when a component's state or props change, it triggers a re-rendering of that component and its child components. This re-rendering process is known as reconciliation. 

import React from 'react';
import { View, Text } from 'react-native';

const CustomComponent = () => {
  return (
    <View  >
      <Text style={{fontSize:20}}> companyName : Samsung  </Text>
      <Text style={{fontSize:20}}> Location : Dhaka </Text>
      <Text style={{fontSize:20}}> Product: Mobile</Text>

    </View>
  );
};

export default CustomComponent;




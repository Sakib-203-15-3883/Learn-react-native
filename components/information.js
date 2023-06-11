import React from 'react';
import {View, Text} from 'react-native';

const email = () => {
    const value = 'junaedjunaed25@gmail.com';
    return value;
  };

  const Information = () => {
    return (
      <View>
        <Text style={{ fontSize: 20 }}>My Email: {email()} </Text>
      </View>
    );
  };

export default Information;
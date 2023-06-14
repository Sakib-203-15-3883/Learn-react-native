import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonPress = (value) => {
    setDisplayValue(displayValue + value);
  };

  const handleCalculate = () => {
    try {
      const result = eval(displayValue);
      setDisplayValue(result.toString());
    } catch (error) {
      setDisplayValue('Error');
    }
  };

  const handleClear = () => {
    setDisplayValue('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.display}>{displayValue}</Text>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('7')}
        >
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('8')}
        >
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('9')}
        >
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleButtonPress('/')}
        >
          <Text style={styles.operationButtonText}>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('4')}
        >
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('5')}
        >
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('6')}
        >
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleButtonPress('*')}
        >
          <Text style={styles.operationButtonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('1')}
        >
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('2')}
        >
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('3')}
        >
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleButtonPress('-')}
        >
          <Text style={styles.operationButtonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress('0')}
        >
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleButtonPress('.')}
        >
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={handleCalculate}
        >
          <Text style={styles.calculateButtonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.operationButton}
          onPress={() => handleButtonPress('+')}
        >
          <Text style={styles.operationButtonText}>+</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 21,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft:5,
    marginRight : 5,
    backgroundColor: '#144062',
  },
  display: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 40,
    backgroundColor: '#268FDF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    width: 80,
    height: 80,
    backgroundColor: '#092C7F',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 40,
  },
  buttonText: {
    fontSize: 36,
    fontWeight: 'bold',
  },
  operationButton: {
    width: 80,
    height: 80,
    backgroundColor: '#61DA61',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  operationButtonText: {
    fontSize: 39,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  calculateButton: {
    width: 160,
    height: 80,
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
  calculateButtonText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  clearButton: {
    width: 120,
    height: 40,
    backgroundColor: '#f44336',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  clearButtonText: {
    fontSize: 25,
    color: '#ffffff',
  },
});

export default App;



// import CustomComponent from './components/CustomComponent';

// import Information from './components/information';





// Here, a functional component named App is defined. It uses an arrow function syntax (() => {}) to define the component. The component returns JSX code wrapped inside a View component, which acts as a container for other components.

// Inside the View, there are three Text components, each with different font sizes (50, 30, and 20). They contain the text content you provided as a message for your first React app.

//JSX (JavaScript XML) is an extension to JavaScript syntax that allows you to write HTML-like code within JavaScript. It's a syntax extension used in React (including React Native) to describe the structure and appearance of UI components.Any JavaScript expression will work between curly braces, including function calls.

// const App = ()=>{
//   const name = 'Sakib ';
//   const handlePress = () => {
//     Alert.alert('Button Pressed!');
//     // Perform additional actions or logic here
//   };
//   return (

//     ////////////                REACT NATIVE CORE  UI COMPONENTS        //////////////////////////



//     //<View> (A non-scrolling div) : A container that supports layout with flexbox, style, some touch handling, and accessibility controls

//     //<Text>(p) : Displays, styles, and nests strings of text and even handles touch events

//     //<Image> (image):Displays different types of images

//     //<ScrollView> (div) : A generic scrolling container that can contain multiple components and views

//     //<TextInput> (<input type="text">) : Allows the user to enter text
    
//     <View>
//       <Text style={{ fontSize: 50 }}>hello {name} </Text>
//       <Button title="Press here" onPress={() => console.log('Button pressed')} />
      
//       <Button title="Press here Again" onPress={() => console.log('Button pressed Again')} />
//       <Text style={{fontSize:40}}>Office data</Text>
//       <CustomComponent />
//       <Information />
//       <calculator/>
   
//     <View>
//       <Button title="Press Me" onPress={handlePress} />
//     </View>
  

//     </View>
//   )

  
// }

// This line exports the App component as the default export of the module, which allows it to be imported and used in other parts of your application.
















import React from 'react';
import { Text, View, TextInput } from 'react-native';

const SimpleTextInput = ({textStyle}) => {
  const {
    containerStyle,
    textInputStyle
  } = styles;

  return (
   <View style={containerStyle}>
     <Text>Hello World</Text>
       <TextInput  
                    style={[textInputStyle, textStyle]}  
                    placeholder="Type here to translate!"  
                    onChangeText={(text) => this.setState({text})}  
                />  
    </View>
  );
};
const styles = {
  containerStyle: {
    display: "flex",
  },
  textInputStyle: {
    height: 32,
    top: 118,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    borderColor:'#000',
    borderWidth: 1
  }
};
export default SimpleTextInput;
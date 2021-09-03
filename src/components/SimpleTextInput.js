import React from 'react';
import { Text, View, TextInput } from 'react-native';

const SimpleTextInput = ({text, inputStyle}) => {
  const {
    containerStyle,
    textStyle,
    textInputStyle
  } = styles;

  return (
   <View style={containerStyle}>
     <Text style={textStyle}>{text}</Text>
       <TextInput  
                    style={[textInputStyle, inputStyle]}  
                    placeholder=""  
                    onChangeText={(text) => this.setState({text})}  
                />  
    </View>
  );
};
const styles = {
  containerStyle: {
    display: "flex",

  },
  textStyle: {
    // fontFamily: Open Sans,
    // fontStyle: normal,
    fontWeight: "300",
    fontSize: 22,
    lineHeight: 30,
    display: "flex",
    color: "#000000" 
  },
  textInputStyle: {
    height: 32,
    marginTop:10,    
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  }
};
export default SimpleTextInput;
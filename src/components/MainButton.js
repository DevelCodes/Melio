import React from 'react';
import { Text, View, TouchableOpacity} from 'react-native';
import styled from 'styled-components';
const MainButton = ({btnName, style}) => {

  const {
    container,
    containerStyle,
    textStyle
  } = styles;

  return (
   <View style={container}>
      <TouchableOpacity
            style={[containerStyle, style]}
            onPress={()=> navigation.navigate('ParentDetails')}>
            <Text style={textStyle}>{btnName}</Text>
            </TouchableOpacity>
    </View>
  );
};
// const SimpleButton = styled.button`
//   background: transparent;
//   border-radius: 3px;
//   border: 2px solid palevioletred;
//   color: palevioletred;
//   margin: 0 1em;
//   padding: 0.25em 1em;
// `;
const styles = {
  container: {
    alignItems:'center', 
  },
  containerStyle: {
    alignItems:'center', 
    justifyContent:'center',
    backgroundColor: '#B0B0B0',
    width: 225,
    height: 44,
    borderRadius: 10
  },
  textStyle: {
    fontWeight: "300",
    fontSize: 22,
    lineHeight: 30,
    display: "flex",
    alignItems: "flex-end",
    textAlign: "center",
    color: "#FFFFFF"
  }
};
export default MainButton;
import React from 'react';
import { Button, Text, View } from 'react-native';
import styled from 'styled-components/native';
import styledComponentsNativeCjs from 'styled-components/native';
const MainButton = ({btnName, style}) => {

  // const {
  //   containerStyle,
  //   textStyle
  // } = styles;

  return (
  //  <View style={[containerStyle, style]}>
  <View>
      {/* <Text style={textStyle}>{btnName}</Text> */}
      <SimpleButton title="My"></SimpleButton>
    </View>
  );
};
const SimpleButton = styledComponentsNativeCjs.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;
// const styles = {
//   containerStyle: {
//     position: 'absolute',
//     left: 91,
//     backgroundColor: '#B0B0B0',
//     width: 225,
//     height: 44,
//     borderRadius: 10
//   },
//   textStyle: {
//     textAlign: 'center',
//     fontSize: 25,
//     color: '#fff'
//   }
// };
export default MainButton;
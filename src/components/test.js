import React from 'react';
import { Text, View, Image } from 'react-native';
import { StyleSheet } from 'react-native';
const Test = () => {
  return (  
    <View style={styles.container}>
    <Text>Hey</Text>
    <Image source={{uri:'https://source.unsplash.com/random'}} style={{height:50,width:50}}/>
  </View>
);
}


const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: '#ecf0f1',
padding: 8,
flexDirection:'row',
alignItems:'center'
}
});
export default Test;
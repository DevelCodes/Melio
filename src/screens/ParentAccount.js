import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import SimpleTextInput from '../components/SimpleTextInput';
export default function ParentAccount({ navigation }) {
  return (
      <View style={styles.container}> 
    <View style={styles.innerContainer}>
      <SimpleTextInput textStyle={{width: 170, marginRight:10}} ></SimpleTextInput>
      <SimpleTextInput textStyle={{width: 170}}></SimpleTextInput> 
    </View>
    {/* <SimpleTextInput textStyle={{width: 350, marginTop:20, }} ></SimpleTextInput> */}
    <MainButton btnName="Save" style={{top:500}}></MainButton>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
        alignItems:'center', 
       
    },
    innerContainer: {  
    backgroundColor: '#ecf0f1',
    padding: 8,
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'center'
  },
});

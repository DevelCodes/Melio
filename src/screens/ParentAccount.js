import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainButton from '../components/MainButton';
import SimpleTextInput from '../components/SimpleTextInput';
import DropDown from '../components/DropDown';
export default function ParentAccount({ navigation }) {
  return (
      <View style={styles.container}> 
    <View style={styles.innerContainer}>
      <SimpleTextInput text="Parent's Name" inputStyle={{width: 170, marginRight:10}} ></SimpleTextInput>
      <SimpleTextInput text="" inputStyle={{width: 170}}></SimpleTextInput> 
    </View>
    <DropDown></DropDown>
    <SimpleTextInput text="Email id" inputStyle={{width: 350}}></SimpleTextInput> 
    <MainButton btnName="Save" style={{top:50}}></MainButton>
    </View>
  );
}
const styles = StyleSheet.create({
    container:{
      flex: 1,
      marginTop:30,
      alignItems:'center', 
      backgroundColor: "#E2E2E2",
      borderTopLeftRadius:52,
     borderTopRightRadius:52
    },
    innerContainer: {  
    marginTop:100,
    padding: 8,
    flexDirection:'row',
    alignItems:'center', 
    justifyContent:'center'
  },
});

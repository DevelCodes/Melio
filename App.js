import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ParentAccount from './src/screens/ParentAccount';
import Test from './src/components/test';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator>        
        <Stack.Screen name="ParentAccount" component={ParentAccount} options={{ title: 'Welcome' }}/>        
      </Stack.Navigator>    
     </NavigationContainer>
  );
}

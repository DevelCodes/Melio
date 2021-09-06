import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { StyleSheet } from 'react-native';

const HorizontalScrollView = () => {

    return (

        // <View style={{flex:1}}>
        //     <View style={{height : 130, marginTop: 20}}>
        //         <ScrollView>
                    <View style={{height:130, width:130}}>
                        <View>
                            <Image source={require('../../assets/images/GK_Quiz.png')} style={{ width:130, height: 130, resizeMode:'cover'}}/>
                        </View>

                    </View>

        //         </ScrollView>

        //     </View>

        // </View>
    )
};
export default HorizontalScrollView;
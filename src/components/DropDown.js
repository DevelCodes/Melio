import React, {useState, useEffect} from 'react';
import {Text, View, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity, LayoutAnimation, Dimensions, FlatList} from 'react-native';
import colors from '../../assets/colors/colors';

const {width, height} = Dimensions.get("screen");
const CONTENT = [
    {
        isExpanded: false, 
        categoryName: 'Class 3 & 4',
        subCategory:[
            {
                id:1, val:'Class 1 & 2'
            },
            {
                id:2, val: 'Class 5 & 6'
            },
            {
                id:2, val: 'Gunjan'
            },
            {
                id:2, val: 'Lohi'
            },
            {
                id:2, val: 'Vinit'
            }
        ]
    }
]
const styles = StyleSheet.create({
    background:{
  
        
    },
    classText:{
      position: 'absolute',
      width: 280,
      height: 64,
      left: 48,
      top: 210,
      
      fontFamily: 'hk-grotesk.medium-legacy',
      fontStyle: 'normal',
      fontWeight: '600',
      fontSize: 15,
      lineHeight: 32,
      textAlign: 'center',
      color: colors.dark
  },
  
  gridStyles:{
      marginTop:20,
      alignItems:'center',
      padding:20
  },
  
  classItemStyle:{
      width:150,
      height:170,
      borderWidth:3,
      borderColor:colors.active,
      paddingRight:30,
      paddingLeft:30,
      paddingTop:50,
      paddingBottom:50,
      margin: 15,
      backgroundColor: '#ffffff',
      borderRadius:15,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.8,
      shadowRadius: 2,  
      elevation: 15
  },
  classTextStyle:{
      fontFamily: 'hk-grotest.bold-legacy',
      fontSize: 100,
      top:200
  },
  item:{ 
    alignItems: "center",
    justifyContent:"center",
    borderRadius:15,
  },
  itemText:{
    height: 32,
    width:350,
    marginTop:10,    
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
  },
  content:{
    alignSelf:"center",
    backgroundColor:'#ffffff',
    width: width/1.3,
    height:50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 15
  },
  text:{
    width: 280,
   left:20,
    top:15,
    fontFamily: 'hk-grotesk.bold-legacy',
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    textAlign: 'left',
    color: colors.dark
  }
});

const ExpandableComponent = ({item , onClickFunction}) => {
    const [layoutHeight, setLayoutHeight] = useState(0)

    useEffect(() =>{
        if(item.isExpanded){
            setLayoutHeight(null);
        } else {
            setLayoutHeight(0)
        }
    }, [item.isExpanded])

    return(
        <View>
            <TouchableOpacity style = {styles.item} onPress={onClickFunction}>
            <Text style = {styles.itemText}> {item.categoryName} </Text>
            </TouchableOpacity>
            <View style = {{
                height: layoutHeight,
                overflow:'hidden'
            }}>
                {
                    item.subCategory.map((item, key) =>(
                        <TouchableOpacity
                        key={key}
                        style= { styles.content}
                        > 
                            <Text style= {styles.text}>
                                {key}. {item.val}
                            </Text>
                            <View style={styles.separator } />
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}

export default DropDown = () => {
    const[listDataSource, setListDataSource] = useState(CONTENT);
    const updateLayout = (index) => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        const array = [...listDataSource];
        array.map((value, placeIndex) =>
        placeIndex === index
        ? (array[placeIndex]['isExpanded']) = !array[placeIndex]['isExpanded']
        : (array[placeIndex]['isExpanded']) = false
        )
        setListDataSource(array)
    }

    return (
    <View style = {styles.background}>
           {
               listDataSource.map((item, key) =>(
                      <ExpandableComponent 
                      key={item.categoryName}
                      item = {item}
                      onClickFunction={() => {
                      updateLayout(key)
                      }}
                      />    
               ))
           }
           </View>
    )
}
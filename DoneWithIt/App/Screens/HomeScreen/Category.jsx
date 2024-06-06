import { View, Text,  FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors';
import Heading from '../../components/Heading';
export default function Category() {
    const [category, setCategory]=useState();
    useEffect(()=>{
        getCategories();
    },[])
    const getCategories=()=>{
        GlobalApi.getCategories().then(resp=>{
            console.log("Response",resp.categories);
            setCategory (resp?.categories)
        })
    }
  return (
    <View>
    <View>
        <Heading text={'Categories'} isViewAll={true}/>
    </View>
    <FlatList 
        numColumns={4}
        data={category}
        renderItem={({item,index})=>(
            <View style={styles.category}>
            <View style={styles.catImage}>
                <Image source={{uri:item?.icon?.url}} style={{width:60, height:60}}></Image>
            </View>
            <Text style={{fontSize:10}}>
                {item?.catName}
            </Text>
            </View>
            
        )}
        />  
    </View>  
  )
}
const styles = StyleSheet.create({
    catImage:{
        backgroundColor:Colors.GREY,
        borderRadius:99,
        padding:10,
    },
    category:{
        flex: 1,
        alignItems: 'center'
    }
})
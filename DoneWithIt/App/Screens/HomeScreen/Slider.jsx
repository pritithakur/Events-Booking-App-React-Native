import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../components/Heading';
import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {
const [slider,setSlider]=useState();
    useEffect(()=>{
        getSlider();
    },[])
    const getSlider=()=>{
        GlobalApi.getSliders().then(resp=>{
            console.log("Response",resp.sliders);
            setSlider (resp?.sliders)
        })
    }
  return (
    <View style={{marginTop:20}}>
      <FlatList 
        horizontal={true}
        data={slider}
        renderItem={({item,index})=>(
            <View style={{marginLeft:15}}>
                <Image source={{uri:item?.image?.url}} style={styles.sliderImage}></Image>
            </View>
        )}
        />
    </View>
  )
}

const styles = StyleSheet.create({
    sliderImage:{
        width:270,
        height: 150,
        borderRadius: 20,
    },

})
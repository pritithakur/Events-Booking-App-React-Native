import { View, Text, FlatList, Image, StyleSheet} from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors';
import Heading from '../../components/Heading';

export default function City() {
  const [city, setCity]=useState();
    useEffect(()=>{
        getCity();
    },[])
    const getCity=()=>{
        GlobalApi.getCity().then(resp=>{
            console.log('City', resp.cities);
            setCity(resp?.cities);
        })
    }
  return (
    <View>
      <Heading text={"Popular Destinations"}/>
      <FlatList
      horizontal
      data={city}
      renderItem={({item,index})=>(
        <View style={styles.cityCont}>
          <View style={styles.cityImage}>
                <Image source={{uri:item?.icon?.url}} style={{width:100, height:80,borderRadius:9, padding:7}}></Image>
            </View>
        </View>
      )}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  cityImage:{
    borderRadius:9,
    padding:10,
},
})
import { View, Text, FlatList, Image, StyleSheet, ScrollView, Button } from 'react-native'
import Heading from '../../components/Heading'
import React, { useEffect, useState } from 'react'
import { FontAwesome6 } from '@expo/vector-icons';
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors';

export default function Hotels() {
    const[hotel,setHotel]=useState();
    useEffect(()=>{
        getHotels();
    },[])
    const getHotels=()=>{
        GlobalApi.getHotel().then(resp=>{
            console.log("Response", resp.hotels);
            setHotel(resp?.hotels);
        })
    }
    return (
        <View>
          <Heading text={'Hotels'} isViewAll={true}/>
          <FlatList
            horizontal
            data={hotel}
            renderItem={({item,index})=>(
              <View style={styles.hotelsImage}>
                <Image source={{uri:item?.image?.url}} style={{width:'100%', height:'60%'}} />
                <View style={{padding:10}}>
                <Text style={{fontFamily:'RobotaSlab-Bold', fontSize:14}}>{item?.name}</Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesome6 name="location-dot" size={18} color="black" />
              <Text style={{fontFamily:'RobotaSlab-Light', fontSize:14}}> {item?.location}</Text>
            </View>
                <View style={styles.cont}>
                <Text style={styles.price}>Price: ₹{item?.price}</Text>
                <Text style={{color:Colors.PRIMARY}}>Details</Text>
                </View>
                </View>
              
              </View>
            )}
          />
        </View>
      );
    }
const styles = StyleSheet.create({
    hotelsImage:{
    backgroundColor:Colors.WHITE,
    marginLeft:12,
    borderRadius:10,
    width:200,
    height:260,
    overflow:'hidden'
    },
    cont:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      marginTop:5,
      alignItems:'center'
    },
    price:{
      fontSize:14,
      backgroundColor:Colors.SECONDARY,
      color:Colors.WHITE,
      width:90,
      padding:3,
      borderRadius:5
    }
})
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Colors from '../../Utils/Colors';
import { FontAwesome6, FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import Heading from '../../components/Heading';
import { useNavigation } from '@react-navigation/native';

export default function HotelList({hotel}) {
    const[hotelList,setHotel]= useState();
    const navigation = useNavigation();

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
          <Heading text={"Explore New Hotels"}/>
          <FlatList 
                data={hotelList}
                renderItem={({item,index}) => (
                    <TouchableOpacity onPress={()=>navigation.push('Details',{
                      hotel:item
                    })} style={styles.listCont}>
                        <Image source={{uri:item?.image?.url}} style={{width:145, height:140, borderRadius:6, marginRight:20}} />
                        <View style={styles.itemDetails}>
                            <View style={styles.textAndStarsContainer}>
                                <Text style={{fontSize:16, fontFamily:'RobotaSlab-Bold', paddingLeft:5}}>{item?.name}</Text>
                                <View style={styles.starContainer}>
                                    <AntDesign name="star" size={16} color="orange" />
                                    <AntDesign name="star" size={16} color="orange" />
                                    <AntDesign name="star" size={16} color="orange" />
                                </View>
                            </View>
                            <View style={styles.Cont}>
                                <FontAwesome6 name="location-dot" size={18} style={{paddingRight:5}} color="black" />
                                <Text>{item?.location}</Text>
                            </View>
                            <Text>25% off on Booking</Text>
                            <Text style={{color:Colors.PRIMARY, fontFamily:"RobotaSlab-Bold",marginBottom:2}}>Price: ₹{item?.price}</Text>
                            <Text style={styles.book}>Book Now</Text>
                        </View>
                    </TouchableOpacity>              
                )}
            />
        </View>
      );
    }
    const styles = StyleSheet.create({
        listCont:{
          backgroundColor:Colors.WHITE,
          padding:10,
          marginBottom:10,
          display:'flex',
          flexDirection:'row',
        },
        itemDetails: {
          flex: 1,
        },
        textAndStarsContainer: {
          flexDirection: 'row', // Arrange hotel name and stars in a row
          justifyContent: 'space-between', // Align items at each end of the container
          alignItems: 'center', // Align items vertically centered
          marginBottom: 5, // Add some space between hotel name/stars and other details
        },
        starContainer: {
          flexDirection: 'row', // Ensure stars are laid out in a row
        },
        Cont:{
          flexDirection:'row',
        },
        book:{
          fontSize:14,
          backgroundColor:Colors.SECONDARY,
          color:Colors.WHITE,
          width:90,
          padding:3,
          borderRadius:5
        }
      });
      
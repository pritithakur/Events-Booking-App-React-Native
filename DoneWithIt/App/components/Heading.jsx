import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Heading({text, isViewAll=false}) {
  return (
    <View style={styles.container}>
            <View style={styles.SliderHead}>
            <Text style={{fontFamily: 'RobotaSlab-Bold', fontSize:15}}>
                {text}
            </Text>
        </View>
            {isViewAll&&<Text>View All</Text>}
        </View>
  )
}
const styles = StyleSheet.create({
    
    container:{
        padding:10,
        marginLeft:15,
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    }
})
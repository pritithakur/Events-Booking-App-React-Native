import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react'
import Colors from '../../Utils/Colors'
import { useOAuth } from "@clerk/clerk-expo";
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from '../../hooks/useWarmUpBrowser';
WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  useWarmUpBrowser();
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <View style={{alignItems: 'center'}}>
      <Image 
        source={require('./../../../assets/Images/login.png')}
        style={styles.loginImage} 
      />
      <View style={styles.subcontainer}>
        <Text style={{fontSize: 21, color: Colors.WHITE, padding:20, textAlign:'center'}}>
          Let's Explore the app & Find the best hotels at affordable price !!
        </Text>
        <Text style= {{fontSize:18 , color: Colors.WHITE, textAlign: 'center', fontWeight:'bold'}}>
          We are offering the resorts & hotels with Mountain view.
        </Text>
        <TouchableOpacity style={styles.button} onPress ={onPress}>
          <Text>
            Let's get Started
          </Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  loginImage: {
    padding: 70,
    marginBottom: 40,
    marginLeft:10,
    marginRight: 20,
    marginTop: 70,
    paddingTop: 50,
    alignItems: 'center'
  },  
  subcontainer: {
    backgroundColor: Colors.PRIMARY,
    width: '100%',
    height:'70%',
    marginTop:-20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  button: {
    backgroundColor: Colors.WHITE,
    padding:15,
    margin:20,
    borderRadius:99,
    alignItems: 'center'
  }
});

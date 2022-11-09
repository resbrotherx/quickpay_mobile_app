import React from 'react'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'

const Buttons = ({on_press,btn_text}) => {
    return (
        <TouchableOpacity style={{justifyContent:'center', flexDirection:'column',  width:'95%',backgroundColor:"#fff",height:50,marginBottom:50,borderRadius:50}} 
        onPress={on_press}>
            <Text style={{fontSize:15,letterSpacing:1.5,textAlign:'center',position:'relative',fontFamily:'OpenSans-SemiBold',color:Colors.black}} >{btn_text}</Text>


        </TouchableOpacity>
    )
}

export default Buttons

const styles = StyleSheet.create({})

import React, {useContext, useState} from 'react';
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import {Colors} from '../../src/constants'
import Icon from 'react-native-vector-icons/FontAwesome'
import Buttons from '../components/Buttons'
import AsyncStorage from '@react-native-async-storage/async-storage';

import Spinner from 'react-native-loading-spinner-overlay';
import {AuthContext} from '../constants/AuthContext';



const Login = ({navigation}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [seePassword, setSeePassword] = useState(true);
    const {isLoading, login} = useContext(AuthContext);
    // const [formData,setformData] = useState({
    //     email:'',
    //     password:''
    // })

    // const handleLogin = () => {
    //     const checkPassowrd = password;
    //     if (checkPassowrd) {
    //     userLogin({
    //             username: username,
    //             password: password,
    //         })
    //         .then(result => {
    //           if (result.status == 200) {
    //             AsyncStorage.setItem('AccessToken', result.data.token);
    //             navigation.replace('Meter');
    //           }
    //         })
    //         .catch(err => {
    //           console.error(err);
    //         });
    //     } else {
    //       alert(checkPassowrd);
    //     }
    //   };


    
    return (
        <ScrollView style={{flex:1,backgroundColor:'#fff',flexDirection:'column'}}>
            <StatusBar barStyle="dark-content" height="4px" color="#fff" backgroundColor="#fff" />
            {/* login form section */}
            <Spinner visible={isLoading} />
            <View style={{flex:2,flexDirection:'column',backgroundColor:'#fff'}} >
            <View style={{justifyContent:"center",alignItems:'center',textAlign:"center",padding:-20,marginBottom:-19,marginTop:95}}>
                <Image  source={require('../assets/images/BEDC.png')}
                style={{backgroundColor:'#fff'}} >
              
            </Image>
            </View>
                {/* <Text style={{fontFamily:"OpenSans-Regular",fontSize:14,paddingTop:10,color:"#777"}} >I am happy to see you again. You can continue where you left off by logging in</Text> */}

                <View style={{flexDirection:'column',paddingTop:110}} >
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center', marginLeft:19, borderColor:'#000',backgroundColor:'#ededed',width:'90%',borderRadius:10,height:60,paddingLeft:20}} >
                        <Icon name="user-o" size={22} color="#818181" />
                        <TextInput value={username} onChangeText={text => setUsername(text)} style={styles.input} placeholder="Enter Your Username" placeholderTextColor="#818181" />

                    </View>

                    <View style={{flexDirection:'row',justifyContent:'center', marginLeft:19,alignItems:'center',backgroundColor:'#ededed',width:'90%',borderRadius:10,height:60,paddingLeft:20,marginTop:20}} >
                        <Icon name="lock" size={22} color="#818181" />
                        <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.input} placeholder="Enter Your Password" secureTextEntry={true} placeholderTextColor="#818181" />
                    </View>

                    <View style={{width:'95%',marginBottom:15}} >
                        <Text style={{fontSize:17,fontFamily:'OpenSans-SemiBold',
                    color:'#007ec7',alignSelf:'flex-end',paddingTop:10}} >Forgot Password?</Text>
                    </View>
                    <View style={{flexDirection:'column',alignItems:'center',width:'95%',marginTop:60}} >
                        <TouchableOpacity  onPress={() => {login(username, password, navigation);}} style={[styles.social_btn,{backgroundColor:"#fff",width:340,marginBottom:25,borderColor:'#007ec7'}]} >
                            <Image style={styles.social_img} source={require('../assets/images/lock.png')} />
                            <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:"bold"}} >Sign in to Account  </Text>
                        </TouchableOpacity>
                        
                        {/* <TouchableOpacity onPress={()=>console.log("login")} style={[styles.social_btn,{backgroundColor:"#007ec7",width:340,marginBottom:0,borderColor:'#007ec7'}]} >
                            <Image style={styles.social_img} source={require('../assets/images/facebook_icon.png')} />
                            <Text style={{width:'80%',textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#fff",fontWeight:"bold"}} >Sign in with Dumb  </Text>
                        </TouchableOpacity> */}

                       
                    </View>
                    {/* <Buttons  btn_text={"Sign In"} on_press={()=>console.log(formData)} /> */}
                   
                </View>
            </View>

            {/* social login section */}
            
            <Text style={{fontFamily:'OpenSans-Medium',marginLeft: 10,fontSize:9,color:'gray',marginTop:'38%'}} >Copyright © Sterling Technologies.Powered by Sterling SmartCash Collection Aggregator.</Text>
        </ScrollView>
    )
}

export default Login

const styles = StyleSheet.create({
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:20,
        color:"#000",
        
    },
    social_btn:{
        height:47,
        width:'100%',
        borderWidth:1,
        borderRadius:25,
        borderColor:'#fff',
        backgroundColor:"#fff",
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 30,
        marginBottom:20
    },
    social_img:{
        width:25,
        height:25,
        marginLeft:15
    }
})
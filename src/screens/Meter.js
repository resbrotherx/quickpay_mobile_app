import React,{useContext, useCallback, useRef, useState} from 'react';
import { StyleSheet, Text, ScrollView,View,StatusBar,Image,TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import {Colors} from '../../src/constants';
import Icon from 'react-native-vector-icons/FontAwesome';
import Buttons from '../components/Buttons';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import {AuthContext} from '../constants/AuthContext'
import Spinner from 'react-native-loading-spinner-overlay';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

// onPress={()=>navigation.navigate("Accountshootdetails")}
export default function Meter({navigation}){
    const {userInfo, userInfos, splashLoading} = useContext(AuthContext);
    const [tokens, setTokens] = useState(null);
    const [acc_no, setAcc_no] = useState(null);
    const sheetRef = useRef(null);
    const [isOpen, setIsOpen] = useState(true);
    const {isLoading, account} = useContext(AuthContext);

    const snapPoints = ["39",];

    // const logout = () => {
    //     AsyncStorage.removeItem('userInfo');
    //     // navigation.dispatch(
    //     //     CommonActions.reset({
    //     //       index: 0,
    //     //       routes: [{name: 'Login'}],
    //     //     }),
    //     //   );
    //     const resetAction = navigation.reset({
    //         index: 0,
    //         actions: [navigation.navigate("Login")],
    //     });
    //     navigation.dispatch(resetAction);
    // };

    return (
        <View style={{flex:1,backgroundColor:'gray',alignItems:'center',justifyContent:'center'}}>
           <Spinner visible={isLoading} />
          <ImageBackground source={require('../assets/images/4.jpg')}
                style={{paddingTop: 310, flex:1, justifyContent:'center', width:'100%'}} >
               
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}} >
                    {/* <Text style={{fontFamily:'OpenSans-SemiBold',fontSize:30,color:Colors.black}} >Welcome Back</Text> */}
                    {/* <Image source={require('../assets/images/waving_hand.png')} style={{width:30,height:30}}  /> */}
                </View>
            </ImageBackground>
        <BottomSheet style={{border:3,borderColor:"#007ec7"}} ref={sheetRef} snapPoints={snapPoints} enablePanDownToClose={true} onClose={() => setIsOpen(false)}>
            <BottomSheetView style={[styles.contentContainer]}>
            <Image style={styles.social_img} source={require('../assets/images/check.png')} />
                <Text style={styles.text}>You've Successfully Login</Text>
                <Text style={{color:"#000",marginTop:13,fontWeight:"60"}}>To Procced Please Enter Your Meter/Account Number</Text>
           
                <View style={{flexDirection:'row',justifyContent:'center', marginLeft:10,alignItems:'center',backgroundColor:'#ededed',width:'90%',borderRadius:10,height:50,paddingLeft:20,marginTop:15}} >
                        {/* <TextInput onChangeText={() => setTokens(`${userInfo.token}`)} style={[styles.input,{visibility: 'hidden'}]} placeholder="Meter/Account Number ex (89033...9900)" placeholderTextColor="#818181" /> */}
                        <TextInput value={acc_no} onChangeText={text => setAcc_no(text)} style={styles.input} placeholder="Meter/Account Number ex (89033...9900)" placeholderTextColor="#818181" />
                </View>

                <View style={{flexDirection:'column',alignItems:'center',width:'95%',marginTop:10}} >
                        <TouchableOpacity  onPress={() => {account(`${userInfo.token}`, acc_no, navigation);}} style={[styles.social_btn,{backgroundColor:"#fff",width:340,marginBottom:25,borderColor:'#fff'}]} >
                            <Text style={{width:'80%',marginLeft: 30,textAlign:'center',fontSize:18,fontFamily:'OpenSans-Medium',color:"#007ec7",fontWeight:"bold"}} >Sign in to Account  </Text>
                        </TouchableOpacity>
                </View>
                {/* <View style={{flexDirection:'column',alignItems:'center',width:'95%',marginTop:-20}} >
                        <TouchableOpacity onPress={() => logout()}  style={[styles.social_btn,{backgroundColor:"#007ec7",width:340,marginBottom:25,borderColor:'#fff'}]} >
                            <Text style={{width:'80%',marginLeft: 30,textAlign:'center',fontSize:18,fontFamily:'OpenSans-Medium',color:"#fff",fontWeight:"bold"}} >Logout from Account  </Text>
                        </TouchableOpacity>
                </View> */}
                <Text style={{fontFamily:'OpenSans-Medium',marginLeft: 5,fontSize:9,color:'gray'}} >Copyright © Sterling Technologies.Powered by Sterling SmartCash Collection Aggregator.</Text>
            </BottomSheetView>
        </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
      flex: 1,
      color:"#000",
      alignItems: 'center',
    },
    input:{
        position:'relative',
        height:'100%',
        width:'90%',
        fontFamily:'OpenSans-Medium',
        paddingLeft:7,
        color:"#000"
    },
    social_img:{
        width:55,
        height:55,
        top:-1,
    },
    social_btn:{
        height:47,
        width:'100%',
        borderWidth:1,
        borderRadius:5,
        
        borderColor:'#fff',
        backgroundColor:"#fff",
        flexDirection:'row',
        alignItems:'center',
        marginLeft: 30,
        marginBottom:20
    },
    text:{
        color:"green",
        fontSize:21,
    },
  });
import React, {useContext, useState, useRef } from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput,TouchableOpacity,Image, Modal, SafeAreaView } from 'react-native';
import {Card} from "react-native-shadow-cards";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../constants/AuthContext'
import CheckBox from '@react-native-community/checkbox';
import  { Paystack , paystackProps}  from 'react-native-paystack-webview';
import Spinner from 'react-native-loading-spinner-overlay';
import { RefreshControl } from 'react-native-gesture-handler';

const Paymentform = ({navigation}) => {
  const paystackWebViewRef = useRef(paystackProps.PayStackRef);
  // const {userInfo, userInfos, splashLoading} = useContext(AuthContext);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [amount, setAmount] = useState('');
  const {isLoading, payment,userInf} = useContext(AuthContext);



  // const renderLabel = () => {
  //   if (value || isFocus) {
  //     return (
  //       <Text style={[styles.label, isFocus && { color: 'blue' }]}>
  //         Dropdown label
  //       </Text>
  //     );
  //   }
  //   return null;
  // };

  const goback = () => {
    navigation.goBack();
  };
  return (

    <View style={{flexDirection:'row',width:'100%',marginTop:1}} >
        
    <Modal
        style={{paddingTop:50}}
        animationType='slide'
        transparent={true}
        visible={complianceModal}>
        <SafeAreaView>
          <ScrollView>
            <View style={styles.modalContainer}>
              
                <Text style={{fontSize:60,color:'#362511'}}></Text>

              <View style={styles.modalView}>
                <TouchableOpacity onPress={() => goback()} style={[styles.social_btn,{backgroundColor:"#007ec7",width:90,marginBottom:40,borderColor:'#007ec7',marginLeft: -298,}]} >     
                  <Text style={{width:'70%',marginLeft: 2,textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#fff",fontWeight:"bold"}} >Back</Text>
                </TouchableOpacity>

                <Text style={styles.title}>Payment</Text>

        <View style={{backgroundColor:"#fff",marginLeft:3, borderRadius:15, borderLeftWidth:7,borderColor:"#007ec7",marginTop:10}}>
          <View style={{height:"42%"}}>
          <Card style={{paddingTop: 10, paddingLeft:-19,height:"255%"}}>
          <View style={styles.container}>
        <Text style={[styles.label,{ color: '#aeaeae',marginLeft:36 }]}>
            AMOUNT
          </Text>
          <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value={amount}
        onChangeText={text => setAmount(text)}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"#007ec7",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
      </View>
      <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:36 }]}>
          YOUR EMAIL
        </Text>
        <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value={email}
        onChangeText={text => setEmail(text)}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"#007ec7",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
            <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:36 }]}>
          YOUR CONTACT
        </Text>
        <TextInput
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        value={contact}
        onChangeText={text => setContact(text)}
        selectTextOnFocus={false}
        maxHeight={300}
        labelField="label"
        valueField="value"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValue(item.value);
          setIsFocus(false);
        }}
      />
      <AntDesign
            style={[styles.icon,{backgroundColor:"#007ec7",marginTop:-43,
            marginLeft:14,textAlign:"center", borderRadius:8,padding:6,width:30}]}
            color={isFocus ? '#fff' : '#fff'}
            background={"#007ec7"}
            name="user"
            size={15}
          />
    </View>
          
      <Paystack
        paystackKey="pk_test_ba3dc4e7b49697d88c6e4bd40d47bf7a2e55a582"
        paystackSecretKey="sk_test_358f2b71763ec3ec2e6381f91ef46dea7f9c98aa"
        billingEmail={email}
        amount={amount}
        billingMobile={contact}
        billingName="BEDC"
        currency="NGN"
        onCancel={(e) => {
            console.log(e);
            alert("payment was not successful")
        }}
        onSuccess={(res) => {
            let refs = res
            let ref = refs.data.transactionRef.reference
            
            console.log(userInf);
            {payment(ref)}
            alert("payment was successful")
        }}
        ref={paystackWebViewRef}
      />
                {/* <TouchableOpacity onPress={()=>navigation.navigate("Meter")} style={[styles.social_btn,{backgroundColor:"#007ec7",width:340,marginBottom:25,borderColor:'#007ec7'}]} >     
                  <Text style={{width:'80%',marginLeft: 40,textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:"bold"}} >Sign in to Account  </Text>
                </TouchableOpacity> */}
              
                <TouchableOpacity  onPress={()=> paystackWebViewRef.current.startTransaction()} style={[styles.social_btn,{backgroundColor:"#fff",width:310,marginBottom:0,marginTop:30,borderColor:'#007ec7'}]} >
                    <Text style={{width:'80%',marginLeft: 20,textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#007ec7",fontWeight:"bold"}} >Make Payment </Text>
                </TouchableOpacity>
          </Card>
            
            </View>
        </View>





              </View>
              <Text style={{fontSize:110,color:'#362511'}}></Text>
            </View>

            {/* <View style={styles.checkboxContainer}>
              <CheckBox 
              style={styles.checkbox}
              disabled={false}
              value={toggleCheckBox}
              onValueChange={(newValue) => setToggleCheckBox(newValue)}>
              </CheckBox>
            <Text>Are You sure you wont to continue</Text>
            </View>
            <TouchableOpacity
             style={[styles.continueButton,{backgroundColor:toggleCheckBox ? 'dodgeerblue':'gray'},]}
             disabled={!toggleCheckBox}
             onPress={() => setComplianceModal(false)}>
              <Text>Make Payment</Text>

            </TouchableOpacity> */}
          </ScrollView>
        </SafeAreaView>
        </Modal>            
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    
  },

  modalContainer:{
    flex:1,
    
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'rgba(0,0,0, .6)',
  },
  modalView:{
    flex:1,
    backgroundColor:"white",
    borderRadius:10,
    margin:20,
    padding:10,
    paddingBottom:40,
    alignItems:'center',
  },

  checkboxContainer:{
    flexDirection:'row',
    marginVertical:30,
    alignItems:'center',
  },
  checkbox:{
    width:30,
    height:30,
    marginRight:20,
  },
    continueButton:{
      marginTop:20,
      padding:20,
      borderRadius:18,
  },



  dropdown: {
    height: 60,
    borderColor: 'gray',
    backgroundColor:'#f6f6f6',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    fontSize: 17,
    paddingLeft:60,
    color:"#1b1b1b",
    // left:10,
    
  },
  icon: {
    
  },
  label: {
    position: 'absolute',
    backgroundColor: '#f6f6f6',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  social_btn:{
    height:47,
    borderWidth:1,
    borderRadius:10,
    borderColor:'#fff',
    backgroundColor:"#fff",
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    marginLeft: 30,
    marginBottom:20
},
  iconStyle: {
    width: 20,
    height: 20,
    color:"#fff",
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  title:{
    marginBottom:10,
    color:'#047d9a',
    fontWeight:'bold',
    textAlign:'center',
    fontSize:27,
  },
  checkboxContainer:{
    flexDirection:'row',
    marginVertical:30,
    alignItems:'center',
  },
  checkbox:{
    width:30,
    height:30,
    marginRight:20,
  },
    continueButton:{
      marginTop:20,
      padding:20,
      borderRadius:18,
  },
});
export default Paymentform


import React, {useContext, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Image,StatusBar } from "react-native";
import {Card} from "react-native-shadow-cards";
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AuthContext} from '../constants/AuthContext'

const Accountshootdetails = ({navigation}) => {
  const {userInfo, userInfos, splashLoading} = useContext(AuthContext);
  const [value, setValue] = useState(null);
  const [valueb, setValueb] = useState(null);
  const [valuec, setValuec] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
  const [flexDirection, setflexDirection] = useState("column");
  const data = [
    { label: 'postpaid', value: '1' },
    { label: 'prepaid', value: '2' },
  ];
  const datab = [
    { label: 'reconnection cost', value: '1' },
    { label: 'reconnection fee', value: '2' },
    { label: 'revenue loss', value: '3' },
    { label: 'administrative', value: '4' },
  ];
  const datac = [
    { label: 'Cash', value: '1' },
    { label: 'Direct payment', value: '2' },
  ];
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
  return (
      <View style={{ padding: 9, flex: 1, backgroundColor:"#fff", borderLeftWidth:1,borderColor:"#007ec7" }}>
        <StatusBar barStyle="dark-content" height="4px" color="#fff" backgroundColor="#fff" />
        <View style={{justifyContent:"center",alignItems:"center",marginBottom:11}}>
        <Image style={{width:90,height:90,borderRadius:60}} source={require('../assets/images/avatar.png')} />
        <Text style={[styles.labels,{color:"#000"}]}>{`${userInfos.data.name}`}</Text>
        </View>
        <View style={{backgroundColor:"#007ec7",borderRadius:10,height:110, paddingTop:15}}>
          <Text style={[styles.labels,{color:"#fff",marginTop:10}]}> {`${userInfos.data.account}`}</Text>
          <Text style={[styles.labels,{color:"#fff",marginTop:-8,fontSize:15}]}>ACCOUNT NUMBER</Text>
        </View>
        <Text style={{color:"#000",left:"34%",marginTop:9}}>CURRENT METERING TYPE: {`${userInfos.data.category}`}</Text>
        <View style={[styles.row,{marginTop:2}]}>
        <Card
        
              style={[
                styles.button,
                {height:110,width:50,padding: 10, margin: 10,backgroundColor:"#fff",justifyContent:"center",alignItems:"center",borderRadius:5}
              ]}>
              <Text
                style={[
                  styles.buttonLabel,
                  {color:"#000",fontSize:20}
                ]}
              >
              {`${userInfos.data.tariff_name}`}
              </Text>
              <Text
                style={[
                  styles.buttonLabel,
                  {color:"#000",marginTop:3,}
                ]}
              >
              TARIFF NAME
              </Text>
            </Card>
            <Card
              style={[
                styles.button,
                {height:110,width:50,padding: 10, margin: 10, backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}
              ]}>
            <Text
                style={[
                  styles.buttonLabel,
                  {color:"#000",fontSize:20}
                ]}
              >
               {`${userInfos.data.meter_no}`}
              </Text>
              <Text
                style={[
                  styles.buttonLabel,
                  {color:"#007ec7",marginTop:3,}
                ]}
              >
              METER NUMBER
              </Text>
            </Card>
        </View>

        <View style={{backgroundColor:"#fff",marginLeft:3, borderRadius:15, borderLeftWidth:7,borderColor:"#007ec7",marginTop:10}}>
          <View style={{height:"42%"}}>
          <Card style={{paddingTop: 10, paddingLeft:-19,height:"255%"}}>
          <View style={styles.container}>
        <Text style={[styles.label,{ color: '#aeaeae',marginLeft:36 }]}>
            Meter Type
          </Text>
        <Dropdown
          style={[styles.dropdown, isFocus && {color: '#000', borderColor: '#007ec7'}]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          baseColor="rgba(255, 255, 255, 1)" //for initial text color
          search
          value={value}
          maxHeight={300}
          textColor="#000"
          itemTextStyle={styles.TextStyle}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select item' : '...'}
          searchPlaceholder="Search..."
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            <AntDesign
              style={[styles.icon,{backgroundColor:"#007ec7",borderRadius:6,padding:5}]}
              color={isFocus ? 'black' : '#fff'}
              background={"#007ec7"}
              name="book"
              size={15}
            />
          )}
        />
      </View>
      <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:36 }]}>
          Bill Type or Payment Type
        </Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.TextStyle}
        data={datab}
        search
        value={valueb}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValueb(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={[styles.icon,{backgroundColor:"#007ec7",borderRadius:6,padding:5}]}
            color={isFocus ? 'black' : '#fff'}
            background={"#007ec7"}
            name="book"
            size={15}
          />
        )}
      />
    </View>
            <View style={styles.container}>
      <Text style={[styles.label,{ color: '#aeaeae',marginLeft:36 }]}>
          Payment Mode
        </Text>
      <Dropdown
        style={[styles.dropdown, isFocus && { borderColor: '#007ec7'}]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        itemTextStyle={styles.TextStyle}
        data={datac}
        search
        value={valuec}
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
          setValuec(item.value);
          setIsFocus(false);
        }}
        renderLeftIcon={() => (
          <AntDesign
            style={[styles.icon,{backgroundColor:"#007ec7",borderRadius:6,padding:5}]}
            color={isFocus ? 'black' : '#fff'}
            background={"#007ec7"}
            name="mail"
            size={15}
          />
        )}
      />
    </View>
          

                {/* <TouchableOpacity onPress={()=>navigation.navigate("Meter")} style={[styles.social_btn,{backgroundColor:"#fff",width:340,marginBottom:25,borderColor:'#007ec7'}]} >     
                  <Text style={{width:'80%',marginLeft: 40,textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#000",fontWeight:"bold"}} >Sign in to Account  </Text>
                </TouchableOpacity> */}
              
                <TouchableOpacity  onPress={()=>navigation.navigate("Payment", {itemId: 86,otherParam: 'anything you want here',})} style={[styles.social_btn,{backgroundColor:"#007ec7",width:310,marginBottom:0,marginTop:10,borderColor:'#007ec7'}]} >
                    <Text style={{width:'80%',marginLeft: 40,textAlign:'center',fontSize:17,fontFamily:'OpenSans-Medium',color:"#fff",fontWeight:"bold"}} >Confirm Details </Text>
                </TouchableOpacity>
          </Card>
            
            </View>
        </View>
      </View>
  );
}
export default Accountshootdetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 17,
    
  },
  dropdown: {
    color:"#000",
    
    height: 50,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    color:"#000"
  },
  selectedTextStyle: {
    fontSize: 16,
    color:"#000",
  },
  TextStyle: {
    fontSize: 16,
    color:"#000",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    color:"#000",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  social_btn:{
      height:47,
      width:'100%',
      borderWidth:1,
      borderRadius:13,
      borderColor:'#fff',
      backgroundColor:"#fff",
      flexDirection:'row',
      alignItems:'center',
      marginLeft: 20,
      marginBottom:20
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  labels: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
    
  },
});

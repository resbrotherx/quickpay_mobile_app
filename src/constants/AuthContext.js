import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {createContext, useEffect, useState} from 'react';
import {ApiManager} from '../constants/ApiManager';

export const AuthContext = createContext();

export const AuthProvider = ({children,navigation}) => {
  const [userInfo, setUserInfo] = useState({});
  const [userInfos, setUserInfos] = useState({});
  const [userInf, setUserInf] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);

//   const register = (name, email, password) => {
//     setIsLoading(true);

//     axios
//       .post(`${BASE_URL}/register`, {
//         name,
//         email,
//         password,
//       })
//       .then(res => {
//         let userInfo = res.data;
//         setUserInfo(userInfo);
//         AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
//         setIsLoading(false);
//         console.log(userInfo);
//       })
//       .catch(e => {
//         console.log(`register error ${e}`);
//         setIsLoading(false);
//       });
//   };

  const login = (username, password, navigation) => {
    setIsLoading(true);

    axios
      .post(`${ApiManager}/login`, {
        username,
        password,
      })
      .then(res => {
        let userInfo = res.data;
        // console.log(userInfo);
        setUserInfo(userInfo);
        AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
        setIsLoading(false);
        navigation.navigate("Meter")
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const logout = () => {
    setIsLoading(true);
    AsyncStorage.removeItem('userInfo');
    setUserInfo({});
    setIsLoading(false);

  };


//   const logout = () => {
//     setIsLoading(true);

//     axios
//       .post(
//         `${BASE_URL}/logout`,
//         {},
//         {
//           headers: {Authorization: `Bearer ${userInfo.access_token}`},
//         },
//       )
//       .then(res => {
//         console.log(res.data);
//         AsyncStorage.removeItem('userInfo');
//         setUserInfo({});
//         setIsLoading(false);
//       })
//       .catch(e => {
//         console.log(`logout error ${e}`);
//         setIsLoading(false);
//       });
//   };

  // const isLoggedIn = async () => {
  //   try {
  //     setSplashLoading(true);

  //     let userInfo = await AsyncStorage.getItem('userInfo');
  //     userInfo = JSON.parse(userInfo);

  //     if (userInfo) {
  //       setUserInfo(userInfo);
  //     }

  //     setSplashLoading(false);
  //   } catch (e) {
  //     setSplashLoading(false);
  //     console.log(`is logged in error ${e}`);
  //   }
  // };

  // useEffect(() => {
  //   isLoggedIn();
  // }, []);


const account = (token, acc_no, navigation) => {
    setIsLoading(true);

    axios
      .post(`${ApiManager}/details`, {
        token,
        acc_no,
      })
      .then(res => {
        let userInfos = res.data;
        // console.log(userInfos);
        setUserInfos(userInfos);
        AsyncStorage.setItem('userInfos', JSON.stringify(userInfos));
        setIsLoading(false);
        navigation.navigate("Accountshootdetails")
      })
      .catch(e => {
        console.log(`login error ${e}`);
        setIsLoading(false);
      });
  };

  const payment = (amount,transaction_ref,payment_mode, channel,bill_type, account_number,bill_description,token) => {
    setIsLoading(true);

    axios
      .post(`${ApiManager}/verify/transaction/${transaction_ref}`, {
        amount, 
        transaction_ref,
        payment_mode, 
        channel,
        bill_type, 
        account_number,
        bill_description,
        token
      })
      .then(res => {
        let userInf = res.data;
        console.log(userInf);
        setUserInf(userInf);
        AsyncStorage.setItem('userInf', JSON.stringify(userInf));
        setIsLoading(false);
      })
      .catch(e => {
        console.log(`ref error ${e}`);
        setIsLoading(false);
      });
  };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        userInf,
        payment,
        userInfos,
        splashLoading,
        account,
        // register,
        login,
        logout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
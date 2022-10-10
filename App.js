import { StyleSheet, Text, TextInput, View,StatusBar,KeyboardAvoidingView,TouchableOpacity, Alert } from 'react-native'
// import auth from '@react-native-firebase/auth'
import {auth} from './FirebaseAuth/firebase'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import React, { useState } from 'react'

const App = () => {
  
          
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
      if (email !== '' && password !== '') {
        createUserWithEmailAndPassword(auth, email, password)
          .then(() => {
            const signUp = {
              email:email,
              password:password,
            }
            return signUp
          }) 
          .catch((err) => console.log("Login error", err.message));
      }
      else {
        Alert.alert("Add Some Data")
      }
    };
  return (    
    <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <StatusBar
                backgroundColor="seagreen"
            />
            <View
                style={styles.inputView}
            >
                <TextInput
                    placeholder='Email'
                    style={styles.input}
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry
                />
            </View>
            <View style={styles.opacityView}>
                <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.button1}
                    onPress={() => { }}
                >
                    <Text style={{ color: "#fff" }}>
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.85}
                    style={styles.button2}
                onPress={onHandleLogin}
                >
                    <Text style={{ color: "seagreen" }}>
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
  )
}

export default App

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    inputView: {
        width: "80%",
    },
    input: {
        backgroundColor: "#fff",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5
    },
    opacityView: {
        width: "60%",
        marginTop: 40,
        justifyContent: "center",
        alignItems: "center"
    }, button1: {
        backgroundColor: "seagreen",
        width: "100%",
        padding: 15,
        alignItems: "center",
        borderRadius: 10
    },
    button2: {
        width: "100%",
        padding: 15,
        alignItems: "center",
        borderRadius: 10,
        marginTop: 5,
        backgroundColor: "#fff",
        borderWidth: 2,
        borderColor: "seagreen"

    }

})













// firebase push notification code//

// import React,{useEffect,useState} from 'react';
// import {
//   Button,
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import RemotePushController from './servises/remotePushController';
// import { LocalNotification } from './servises/localpushcontroler';
// import PushNotification, {Importance} from "react-native-push-notification";

// const App = () => {

//   useEffect(()=>{
//     requestUserPermission()
//   },[])

//   const[FcmToken,setFcmToken] = useState()

//   const requestUserPermission = async () => {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//       console.log('Authorization status: ======>', authStatus);
//       getToken()
//     }
//   }

//   const getToken = async () => {
//     try {
//       const fcmToken = await messaging().getToken();
//       if (fcmToken) {
//         setFcmToken(fcmToken)
//         alert("Push Notifications cone successfully",FcmToken)
//       }
//     } catch (error) {
//       console.log(error, 'error raised in fcm token');
//     }

//   }
//   return (
//     <SafeAreaView style={{flex:1}}>
//       <View style={{alignItems:"center",justifyContent:"center"}}>
//         <Text>Press Me</Text>


// {/* //for remote push controler means comming from firebase */}
//         {/* <RemotePushController /> */}

// <View style={{justifyContent:"center",alignItems:"center"}}>
//         <Button 
//         title={"Schedule Notification"} 
//         onPress={LocalNotification}/>
//         {/* onPress={()=>console.log("working",{LocalNotification})}/> */}
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default App;




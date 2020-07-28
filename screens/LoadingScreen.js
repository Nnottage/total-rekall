import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import firebase from 'firebase'


export default function LoadingScreen({navigation}) {
  const checkIfLoggedIn = () => {
    firebase.auth().onAuthStateChanged( (user) => {
      if(user) {
        navigation.navigate("DashboardScreen")
      } else {
        navigation.navigate("SignupScreen")
      }
    })
  }  
  
  useEffect( () => {
    checkIfLoggedIn();
  })
  
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" />
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  
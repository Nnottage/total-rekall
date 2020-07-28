import React from 'react';
import * as Google from 'expo-google-app-auth';
import { View, StyleSheet, Button } from 'react-native';
import { authCredentials } from '../config'
import firebase from 'firebase'

export default function SignupScreen() {
  const onGoogleSignIn = (googleUser) => {
    var unsubscribe = firebase.auth().onAuthStateChanged((firebaseUser) => {
      unsubscribe();
      // Check if we are already signed-in Firebase with the correct user.
      if (!isUserEqual(googleUser, firebaseUser)) {
        // Build Firebase credential with the Google ID token.
        var credential = firebase.auth.GoogleAuthProvider.credential(
            googleUser.getAuthResponse().id_token);
        // Sign in with credential from the Google user.
        firebase.auth().signInWithCredential(credential).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
      } else {
        console.log('User already signed-in Firebase.');
      }
    });
  }

  const isUserEqual = (googleUser, firebaseUser) => {
    if (firebaseUser) {
      var providerData = firebaseUser.providerData;
      for (var i = 0; i < providerData.length; i++) {
        if (providerData[i].providerId === firebase.auth.GoogleAuthProvider.PROVIDER_ID &&
            providerData[i].uid === googleUser.getBasicProfile().getId()) {
          // We don't need to reauth the Firebase connection.
          return true;
        }
      }
    }
    return false;
  }
  
  const signUpWithGoogle = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: authCredentials.androidClientId,
        iosClientId: authCredentials.iosClientId,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        googleUser = result
        onGoogleSignIn(googleUser)
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      console.log(e)
      return { error: true };
    }
  }
  
  
  

  return (
    <View style={styles.container}>
      <Button title="Sign Up with Google" onPress={signUpWithGoogle} />
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
  
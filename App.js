import React from 'react';
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import LoadingScreen from './screens/LoadingScreen'
import SignupScreen from './screens/SignupScreen'
import DashboardScreen from './screens/DashboardScreen'

import firebase from 'firebase'
import { firebaseConfig } from './config';
firebase.initializeApp(firebaseConfig)

export default function App() {
  return (
    <AppNavigator />
  );
}

const AppSwitchNavigator = createSwitchNavigator(
  { 
    LoadingScreen: LoadingScreen,
    SignupScreen: SignupScreen,
    DashboardScreen: DashboardScreen
  }
)

const AppNavigator = createAppContainer(AppSwitchNavigator)
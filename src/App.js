import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import FlashMessage from "react-native-flash-message";
import Router from './Router/Router';

const App = () => {
  console.disableYellowBox = true;
  return (
    <>
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
    <FlashMessage position="top"/>
    </>
  )
}

export default App

const styles = StyleSheet.create({})

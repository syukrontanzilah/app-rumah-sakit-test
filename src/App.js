import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import Router from './Router/Router';
import { Splash } from './pages';

const App = () => {
  return (
    <NavigationContainer>
      <Router/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})

import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
// if using different font
import * as Font from 'expo-font'
// extends the splash screen to download font/check if available
import { AppLoading } from 'expo'
import MealsNavigator from './navigation/MealsNavigator'

const fetchFonts = () => {
  //this is promise so must return 
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false)


  // this will make the AppLoading component return until the fonts are loaded
  if (!fontLoaded) {
    return (
      <AppLoading 
        startAsync={fetchFonts} 
        onFinish={()=> setFontLoaded(true)} 
      />
    )
  }

  return (
    <MealsNavigator />
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
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

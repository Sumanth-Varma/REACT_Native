import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import Navigator from './routes/drawer';

const getFonts = () => Font.loadAsync({
  'girassol-regular': require('./assets/fonts/Girassol-Regular.ttf'),
  'merriweather-bold': require('./assets/fonts/Merriweather-Bold.ttf'),
  'merriweather-italic': require('./assets/fonts/Merriweather-Italic.ttf'),
});

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
        <Navigator />
    );
  } else {
    return (
      <AppLoading 
        startAsync={getFonts} 
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn} 
      />
    )
  }
}

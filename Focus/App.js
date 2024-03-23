import React from 'react'
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MapScreen from './src/screens/Map'
import Screenfifty from './src/screens/Levels/Level03/game03'
import LoginEmailScreen from './src/screens/Login/email';
import LoadingScreen from './src/screens/Loading';
import StartScreen from './src/screens/Start';
import MaxScreen from './src/screens/Max';
import CheckTerms from './src/screens/Login/checkTerms';
import Terms from './src/screens/Login/terms';
import LoginNameScreen from './src/screens/Login/name';
import LoginYearScreen from './src/screens/Login/year';
import MainStack from './src/screens/stack/MainStack';



export default function App() {

  const[isLoading, setIsLoading] = useState(true)

  useEffect(() => {
      setTimeout(() => {
          setIsLoading(false)
      }, 3500)
  }, [])

  return (

    <NavigationContainer>
      {isLoading ? (<LoadingScreen/>) : (<MainStack/>)}
    </NavigationContainer>

  )
}


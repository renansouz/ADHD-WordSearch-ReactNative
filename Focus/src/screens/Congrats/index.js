import React, { useState } from 'react';
import { View, Image } from 'react-native';
import styles from './style';


export default function CongratScreen() {

    return(

  <View style = {styles.container}>
      <Image source={require('./parabens.png')} style = {{width: '100%', height: '100%'}}/>
  </View>
  )
}

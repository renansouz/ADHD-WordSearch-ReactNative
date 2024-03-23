import React from 'react';
import { View, Image, Animated, Easing, TouchableHighlight, Text } from 'react-native';
import styles from './style';

export default function LoadingScreen() {

 let rotateValueHolder = new Animated.Value(0)

 const startRotate = () => {
  rotateValueHolder.setValue(0)
  Animated.timing(rotateValueHolder, {
    toValue: 1,
    duration: 1500,
    easing: Easing.linear,
    useNativeDriver: false
  }).start(() => startRotate())
 }

 const RotateData = rotateValueHolder.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']
 })

  return (
    <View style={styles.container}>

      <Image
        style={styles.mainImage}
        source={require('../../images/loadingScreen/mainImage.png')} />


{startRotate()}
<Animated.Image
        style={[
          styles.circle, 
          {transform: [{rotate: RotateData}]}
      ]}
        source={require('../../images/loadingScreen/circleLoading.png')} />

      <Image
        style={styles.logoAuth}
        source={require('../../images/loadingScreen/logoAuth.png')}
      />
      
    </View>
    
  );
  
}

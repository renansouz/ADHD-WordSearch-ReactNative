import React from 'react';
import { View, Image, Text, SafeAreaView } from 'react-native';
import styles from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native'

export default function StartScreen() {

  const navigation = useNavigation()


  return (

    <SafeAreaView style={styles.container}>
      <Image source={require('../../images/startScreen/bg.jpg')} style={styles.container} />

      <Image source={require('../../images/startScreen/focusWord.png')} style={styles.focusImg} />
      <TouchableOpacity onPress = {() => navigation.navigate("MainTab")}  style={styles.playButton}><Text style={styles.textPlayButton}>Jogar</Text></TouchableOpacity>
      <TouchableOpacity onPress = {() => navigation.navigate("NameScreen")}  style={styles.loginButton}><Text style = {styles.textLoginButton}>Realizar login</Text></TouchableOpacity>

      <View style={styles.footer}>
        <Image source={require('../../images/startScreen/rodapé.png')} style={styles.authImg} />
      </View>

    </SafeAreaView>

  )
}
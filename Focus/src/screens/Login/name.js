import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';



export default function LoginNameScreen() {

  const navigation = useNavigation()
  const [userName, setName] = useState('')

  const handleSaveName = async () => {
      if(userName) {
        try{
          await AsyncStorage.setItem('userName', userName)
        } catch(error) {
          alert.error('Erro ao salvar o seu nome! Código: '+error)
        }

        navigation.navigate('YearScreen')
      }
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source = {require('../../images/startScreen/focusWord.png')} style = {styles.focusImg}/>

      <View style = {styles.mainContent}>
        <Text style = {styles.textInform}>Informe seu nome</Text>
        <TextInput
         style = {styles.inputText} 
         placeholder='Digite seu nome'
         onChangeText={(text) => setName(text)}
         value= {userName}
         ></TextInput>

        <TouchableOpacity style = {styles.button} onPress={handleSaveName} >
          <Text style = {styles.textButton}>Continuar</Text>
        </TouchableOpacity>

      </View>
      
      
    </SafeAreaView>
    
  );
  
}

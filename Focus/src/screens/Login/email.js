import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function LoginEmailScreen() {

  const navigation = useNavigation()
  const [email, setEmail] = useState('')

  const handleSaveEmail = async () => {
      if(email) {
        try{
          await AsyncStorage.setItem('email', email)
        } catch(error) {
          alert.error('Erro ao salvar o seu email! Código: '+error)
        }
        navigation.navigate("CheckTerms")
      }
      
  }

  return (
    <SafeAreaView style={styles.container}>

      <Image source = {require('../../images/startScreen/focusWord.png')} style = {styles.focusImg}/>

      <View style = {styles.mainContent}>
        <Text style = {styles.textInform}>Informe seu email</Text>
        <TextInput
         style = {styles.inputText} 
         placeholder='exemplo@email.com'
         onChangeText={(text) => setEmail(text)}
         value= {email}
         ></TextInput>

        <TouchableOpacity style = {styles.button} onPress={handleSaveEmail}>
          <Text style = {styles.textButton}>Continuar</Text>
        </TouchableOpacity>

      </View>
      
      
    </SafeAreaView>
    
  );
  
}

import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function LoginYearScreen() {

  const navigation = useNavigation()
  const [year, setYear] = useState('')

  const handleSaveYear = async () => {
    if (year) {
      try {
        await AsyncStorage.setItem('year', year)
      } catch (error) {
        alert.error('Erro ao salvar o seu ano de nascimento! Código: ' + error)
      }
      navigation.navigate('EmailScreen')
    }
  }

  const formatInput = (date) => {
    const numericValue = date.replace(/\D/g, '');

    let formattedDate = '';

    for (let i = 0; i < numericValue.length; i++) {
      if (i === 2 || i === 4) {
        formattedDate += '/';
      }
      formattedDate += numericValue[i];
    }

    setYear(formattedDate.substr(0, 10));
  };

  return (
    <SafeAreaView style={styles.container}>

      <Image source={require('../../images/startScreen/focusWord.png')} style={styles.focusImg} />

      <View style={styles.mainContent}>
        <Text style={styles.textInform}>Informe seu ano de nascimento</Text>
        <TextInput
          maxLength={10}
          style={styles.inputText}
          placeholder='Digite sua data de nascimento'
          onChangeText={(text) => formatInput(text)}
          keyboardType="numeric"
          value={year}
        ></TextInput>

        <TouchableOpacity style={styles.button} onPress={handleSaveYear}>
          <Text style={styles.textButton}>Continuar</Text>
        </TouchableOpacity>

      </View>


    </SafeAreaView>

  );

}

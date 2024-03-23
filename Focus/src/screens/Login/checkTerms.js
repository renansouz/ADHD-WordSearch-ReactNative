import React, { useState } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity} from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BouncyCheckbox from "react-native-bouncy-checkbox";


export default function CheckTerms() {

  const navigation = useNavigation()
   const [isChecked, setIsChecked] = useState(false)
 
    const handleAcepptTerms = () => {
        setIsChecked(!isChecked)
    }

  return (
    <SafeAreaView style={styles.container}>

      <Image source = {require('../../images/startScreen/focusWord.png')} style = {styles.focusImg}/>

      <View style = {styles.mainContent}>
        <Text style = {styles.textInform}>Termos de Uso</Text>
        
        <View style = {styles.aceppt}>
        <BouncyCheckbox unfillColor='#FFF' fillColor='#2461AA' onPress={handleAcepptTerms} />
        <Text style = {styles.textTerms}>Eu li e aceito a </Text><TouchableOpacity onPress={() => navigation.navigate("Terms")}><Text style = {styles.terms}>Política de Privacidade</Text></TouchableOpacity>
        </View>

        <TouchableOpacity  style = {{
            backgroundColor: isChecked ? '#DF5D01' : '#777',
            padding: 15,
            borderRadius: 20
            }}  disabled = {!isChecked}
            onPress={() => navigation.navigate('MainTab')}
            >
          <Text style = {styles.textButton}>Continuar</Text>
        </TouchableOpacity>

      </View>
      
      
    </SafeAreaView>
    
  );
  
}

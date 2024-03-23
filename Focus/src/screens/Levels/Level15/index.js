import React from 'react';
import { Text, View, Image} from 'react-native';
import styles from './style';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LevelScreenFifteen() {

  const navigation = useNavigation()


  return (

    <View style={styles.container}>

      <Image
        style={styles.backgroundImage}
        source={require('../../../images/gameScreen/bg/cienbg.png')} />

      <View style={styles.levelContainer}>
        <View style={styles.header}>
          <Image style={styles.levelIndicator}
            source={require('../../../images/mapScreen/levelIndicator.png')} />
          <Text style={styles.textLevel}>Nível 15</Text>
          <TouchableHighlight onPress={navigation.goBack}>
            <Image style={styles.btExit} source={require('../../../images/mapScreen/btExit.png')} />
          </TouchableHighlight>
        </View>


        <View style={styles.levelInfo}>
          <Image style={styles.backgroundInfoImage} source={require('../../../images/mapScreen/backgroundLevelInfo.png')} />
          <Text style={styles.titleLevelInfo}>Objetivo</Text>
          <Image style={styles.iconLevelInfo} source={require('../../../images/mapScreen/iconTest.png')} />
          <View style={styles.textAreaLevelInfo}>
            <Text style={styles.subtitleLevelInfo}>Frutas</Text>
            <Text style={styles.obsLevelInfo}>Obs: Encontre as delícias da natureza</Text>
            <Text style={styles.obsLevelInfo}>Exemplo: Maçã</Text>
          </View>
        </View>

        <View style={styles.rewardArea}>
          <Text style={{  fontSize: 25, }}>Recompensa</Text>
        </View>

        <TouchableOpacity style={styles.btStart} onPress={() => navigation.navigate("GameFifteen")}>
          <Text style={{ fontSize: 30 }}>Jogar!</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
import React from 'react';
import { Text, View, Image, ActivityIndicator, Animated } from 'react-native';
import styles from './style';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LevelScreenThree() {

  const navigation = useNavigation()


  return (

    <View style={styles.container}>

      <Image
        style={styles.backgroundImage}
        source={require('../../../images/gameScreen/bg/portbg.png')} />
        
      <View style={styles.levelContainer}>
        <View style={styles.header}>
          <Image style={styles.levelIndicator}
            source={require('../../../images/mapScreen/levelIndicator.png')} />
          <Text style={styles.textLevel}>Nível 03</Text>
          <TouchableHighlight onPress={navigation.goBack}>
            <Image style={styles.btExit} source={require('../../../images/mapScreen/btExit.png')} />
          </TouchableHighlight>
        </View>


        <View style={styles.levelInfo}>
          <Image style={styles.backgroundInfoImage} source={require('../../../images/mapScreen/backgroundLevelInfo.png')} />
          <Text style={styles.titleLevelInfo}>Objetivo</Text>
          <Image style={styles.iconLevelInfo} source={require('../../../images/mapScreen/iconTest.png')} />
          <View style={styles.textAreaLevelInfo}>
            <Text style={styles.subtitleLevelInfo}>Profissões</Text>
            <Text style={styles.obsLevelInfo}>Obs: São ocupações que as pessoas têm</Text>
            <Text style={styles.obsLevelInfo}>Exemplo: Médico</Text>
          </View>
        </View>

        <View style={styles.rewardArea}>
          <Text style={{ fontSize: 25, }}>Recompensa</Text>
        </View>

        <TouchableOpacity style={styles.btStart} onPress={() => navigation.navigate("GameThree")}>
          <Text style={{ fontSize: 30 }}>Jogar!</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
import React from "react";
import { View, Image, TouchableOpacity, Text} from "react-native"
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function PauseScreen() {

    const navigation = useNavigation()

    return (
        <View style={styles.container}>

            <View style={styles.borderArea}>
                <Image
                    source={require('../../images/exitScreen/pauseImage.png')}
                    style={styles.maxImg}
                />

                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.backGame} onPress={() => navigation.goBack()}>
                        <Text  style={styles.textButton} >Voltar ao jogo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.exitGame} onPress={() => navigation.navigate("MainTab")}>
                        <Text  style={styles.textButton}>Sair</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.login}>
                        <Text  style={styles.textButton}>Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

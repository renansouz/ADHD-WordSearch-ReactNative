import { SafeAreaView, View, Image, Text, Alert } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import WordSearchGame from "./game";


export default function WordScreenOne() {

    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <Image source={require('../../../../images/gameScreen/bg/portbg.png')} style={styles.bg} />

            <SafeAreaView style={styles.header}>
                <View style={styles.headerContent}>
                    <Text style={styles.textHeader}>01</Text>

                    <Text style={styles.textHeaderWords}>
                      Verbos
                    </Text>

                    <TouchableOpacity style={styles.buttonConfigIcon}
                        activeOpacity={0.5} onPress={() => navigation.navigate("Pause")}>
                        <Image
                            style={styles.configIcon}
                            source={require('../../../../images/gameScreen/config.png')} />
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
            <View>
                <WordSearchGame />
            </View>
        
            <View >
                <Image source={require('../../../../images/gameScreen/DICAS.png')} style={styles.viewbuttom}/>
            </View>
        </View>
    )
}




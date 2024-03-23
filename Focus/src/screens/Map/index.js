import React, { useState, useEffect } from 'react';
import { View, Image, TouchableHighlight, TouchableOpacity, Modal } from 'react-native'
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import ModalConfig from './ModalConfig';



export default function MapScreen() {

    const navigation = useNavigation()
    const [showModal, setShowModal] = useState(false)

    return (

        <View style={{ flex: 1, opacity: showModal ? 0.3 : 1, backgroundColor: showModal ? '#000' : '#000' }}>

            <View style={styles.container}>

                <Image source={require('../../images/mapScreen/bg.png')} style={styles.container} />
                <Image source={require('../../images/mapScreen/ceu.png')} style={styles.skyImage} />

                <Modal
                    visible={showModal}
                    transparent={true}
                    onRequestClose={() => setShowModal(false)}>
                    <TouchableOpacity style={{ position: 'absolute', zIndex: 1, marginTop: '43%', right: 60 }} onPress = {() => setShowModal(false)}>
                        <Image source={require('../../images/mapScreen/exit.png')} style={{ height: 20, width: 20, }} />
                    </TouchableOpacity>
                    <ModalConfig />
                </Modal>

                <TouchableOpacity onPress={() => setShowModal(true)}>
                    <Image source={require('../../images/startScreen/config.png')} style={styles.configImg} />
                </TouchableOpacity>


                {/* Primeira parte */}

                <View style={styles.buttomArea}>

                    <TouchableHighlight style={styles.levelBottom1} onPress={() => navigation.navigate("LevelOne")}>
                        <Image source={require('../../images/mapScreen/bottomComplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom2} onPress={() => navigation.navigate("LevelTwo")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom3} onPress={() => navigation.navigate("LevelThree")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom4} onPress={() => navigation.navigate("LevelFour")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom5} onPress={() => navigation.navigate("LevelFive")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.specialBottom1} onPress={() => navigation.navigate("")}>
                        <Image source={require('../../images/mapScreen/specialLevel.png')} style={styles.specialBottom} />
                    </TouchableHighlight>

                    {/* Segunda parte */}

                    <TouchableHighlight style={styles.levelBottom6} onPress={() => navigation.navigate("LevelSix")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom7} onPress={() => navigation.navigate("LevelSeven")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom8} onPress={() => navigation.navigate("LevelEight")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom9} onPress={() => navigation.navigate("LevelNine")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom10} onPress={() => navigation.navigate("LevelTen")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.specialBottom2} onPress={() => navigation.navigate("")}>
                        <Image source={require('../../images/mapScreen/specialLevel.png')} style={styles.specialBottom} />
                    </TouchableHighlight>

                    {/* Terceira parte */}

                    <TouchableHighlight style={styles.levelBottom11} onPress={() => navigation.navigate("LevelEleven")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom12} onPress={() => navigation.navigate("LevelTwelve")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom13} onPress={() => navigation.navigate("LevelThirteen")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.levelBottom14} onPress={() => navigation.navigate("LevelFourteen")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    {/* {/* <TouchableHighlight style={styles.levelBottom15} onPress={() => navigation.navigate("LevelFifteen")}>
                        <Image source={require('../../images/mapScreen/bottomIncomplete.png')} style={styles.levelBottom} />
                    </TouchableHighlight>

                    <TouchableHighlight style={styles.specialBottom3} onPress={() => navigation.navigate("")}>
                        <Image source={require('../../images/mapScreen/specialLevel.png')} style={styles.specialBottom} /> 
                    </TouchableHighlight> */}
                </View>
            </View>
        </View>
    );
}
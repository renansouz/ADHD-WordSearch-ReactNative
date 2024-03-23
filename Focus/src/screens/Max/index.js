import React, { useState } from 'react';
import { View, Image, Text, TouchableOpacity, Modal } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import ModalCamisa from './modalCamisa';
import ModalShort from './modalShort';
import ModalEspecial from './modalEspecial';
import ModalTenis from './modalTenis/index.';

export default function MaxScreen() {
    const [currentXP, setCurrentXP] = useState(0);
    const maxXP = 1000;

    const handleGainXP = () => {
        const newXP = currentXP + 100;
        setCurrentXP(Math.min(newXP, maxXP));
    };
    const xpPercentage = (currentXP / maxXP) * 100;

    const navigation = useNavigation()

    // Modal Area
    const [visibleModalCamisa, setVisibleModalCamisa] = useState(false)
    const [visibleModalShort, setVisibleModalShort] = useState(false)
    const [visibleModalEspecial, setVisibleModalEspecial] = useState(false)
    const [visibleModalTenis, setVisibleModalTenis] = useState(false)

    return (

        <View style={styles.container}>
            <Image source={require('../../images/maxScreen/fundo.png')} style={styles.container} />

            <View style={styles.barArea}>
                <View style={styles.bgBar}>
                    <View style={[styles.bar, { width: `${xpPercentage}%` }]} />
                </View>
                <Text style={styles.xpText}>{}</Text>
                <TouchableOpacity onPress={handleGainXP}>
                    <Text style={styles.buttonText}></Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCurrentXP(0)}>
                    <Text style={styles.buttonText}></Text>
                </TouchableOpacity>
            </View>

            <View style={styles.maxImg}>
                <Image source={require('../../images/maxScreen/max.png')} style={{ height: 400, width: 200 }} />
            </View>

            <View style={styles.maxArea}>

                <View style={styles.firstHalf}>

                    <Modal
                        visible={visibleModalCamisa}
                        transparent={true}
                        onRequestClose={() => setVisibleModalCamisa(false)}>
                        <ModalCamisa />
                    </Modal>

                    <TouchableOpacity style={styles.camisaBt} onPress={() => setVisibleModalCamisa(true)}>
                        <Image source={require('../../images/maxScreen/camiseta.png')} style={styles.imageBt} />
                    </TouchableOpacity>

                    <Modal
                        visible={visibleModalShort}
                        transparent={true}
                        onRequestClose={() => setVisibleModalShort(false)}>
                        <ModalShort />
                    </Modal>

                    <TouchableOpacity style={styles.shortBt} onPress={() => setVisibleModalShort(true)}>
                        <Image source={require('../../images/maxScreen/short.png')} style={styles.imageBt} />
                    </TouchableOpacity>
                </View>

                <View style={styles.secondHalf}>

                    <Modal
                        visible={visibleModalEspecial}
                        transparent={true}
                        onRequestClose={() => setVisibleModalEspecial(false)}>
                        <ModalEspecial />
                    </Modal>

                    <TouchableOpacity style={styles.especialBt} onPress={() => setVisibleModalEspecial(true)}>
                        <Image source={require('../../images/maxScreen/interrogação.png')} style={styles.imageBt} />
                    </TouchableOpacity>

                    <Modal
                        visible={visibleModalTenis}
                        transparent={true}
                        onRequestClose={() => setVisibleModalTenis(false)}>
                        <ModalTenis />
                    </Modal>

                    <TouchableOpacity style={styles.tenisBt} onPress={() => setVisibleModalTenis(true)}>
                        <Image source={require('../../images/maxScreen/tenis.png')} style={styles.imageBt} />
                    </TouchableOpacity>
                </View>

            </View>

        </View>


    );
}
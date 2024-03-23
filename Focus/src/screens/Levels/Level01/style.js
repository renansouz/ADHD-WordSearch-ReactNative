import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(2, 2, 2, 0.9)',
    },

    backgroundImage: {
        width: '100%',
        height: '100%'
    },

    header: {
        width: '100%',
        top: -30,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },

    btExit: {
        position: 'absolute',
        width: 35,
        height: 35,
        top: -15,
        left: 25
    },

    levelContainer: {
        backgroundColor: '#F9F7F7',
        width: '90%',
        height: '50%',
        marginTop: 125,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        position: 'absolute',
        borderWidth: 10,
        borderColor: '#2461AA',
        borderRadius: 20
    },

    levelIndicator: {
        width: '80%',
        height: 50,
    },

    textLevel: {
        position: 'absolute',
        fontSize: 35,
    },

    levelInfo: {
        width: '85%',
        height: '100%',
        alignItems: 'center',
        top: 40,
        position: 'absolute'
    },

    backgroundInfoImage: {
        width: '100%',
        height: '40%'
    },

    titleLevelInfo: {
        textTransform: 'uppercase',
        position: 'absolute',
        top: 15,
        fontSize: 20
    },

    iconLevelInfo: {
        width: 70,
        height: 70,
        position: 'absolute',
        alignSelf: 'flex-start',
        top: 60,
        left: 10,
    },

    textAreaLevelInfo: {
        width: '70%',
        left: 100,
        position: 'absolute',
        top: 60
    },

    subtitleLevelInfo: {
        fontSize: 20,
        marginBottom: 10
    },

    obsLevelInfo: {
        flexWrap: 'wrap',
        color: '#777'
    },

    rewardArea: {
        position: 'absolute',
        backgroundColor: '#FFF',
        width: '85%',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 15,
        top: 200,
    },

    btStart: {

        paddingHorizontal: 30,
        paddingVertical: 5,
        borderRadius: 30,
        backgroundColor: '#FF5E53',
        marginTop: 320
    }

})

export default styles
import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F7F7',
        paddingTop: 20,
        
    },
    mainContainer: {
        flexDirection: 'row'
    },

    firstContainer: {

    },
    secondContainer: {
        marginTop: 50,
        marginLeft: 50
    },
    header: {
        width: '98%',
        backgroundColor: '#2461AA',
        height: 60,
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: 30,
        borderRadius: 15
    },


    headerText: {
        fontSize: 25,
        fontWeight: '800',
        color: '#FFF'
    },

    buttonMenuIcon: {
        left: 40,
        
    },


    // area total das recompensas
    rewardsArea: {
        height: 'auto',
        width: '100%',
        alignSelf: 'center',
        marginBottom: 100
    },

    // area de cada recompensa por setor

    rewardAreaText: {
        fontSize: 20,
        color: '#000',
        fontWeight: '800',
        letterSpacing: 1,
        marginTop: 20,
        marginLeft: 80
    },

    // cada objeto individual
    reward: {
        backgroundColor: '#FF8126',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        shadowColor: '#000',
        shadowRadius: 10,

    },

    rewardArea: {
        paddingTop: 15,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: "center",
    },


    rewardUnlocked: {
        // backgroundColor: '#FFF',
        // width: 'fit-content',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 25,
        shadowColor: '#000',

    },

    rewardText: {
        color: '#0019FF',
        fontWeight: 'bold',
        fontSize: 15
    },

    clothLocked: {
        width: 60,
        height: 55,
        marginBottom: 10
    },
    clothUnlocked: {
        width: 67,
        height: 63,
        marginBottom: 10,
    },

    arrow: {
        width: 60,
        height: 60
    },

    secondBackground: {
        backgroundColor: '#FF8126',
        // width: 'fit-content',
        padding: 13,
        borderRadius: 25,
        borderBottomColor: '#000',
        shadowColor: '#000',
        shadowRadius: 10,
    },

    TabBar: {
        height: '100%'
    }
})

export default styles
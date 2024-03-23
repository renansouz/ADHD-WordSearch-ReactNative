import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        width: '80%',
        position: 'absolute',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F9F7F7',
        marginTop: 150,
        borderRadius: 20,
    },

    header: {
        width: '100%',
        alignItems: "center",
        justifyContent: 'center',
        padding: 20,
        borderBottomColor: 'rgba(2, 2, 2, 0.2)',
        borderBottomWidth: 5,
        shadowColor: '#333',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
    },

    mainText: {
        textTransform: 'uppercase',
        fontWeight: 800,
        fontSize: 25
    },

    userName: {
        fontSize: 25,
        marginTop: 20,
        color: '#FF8126',
        fontWeight: 800,
        textTransform: 'capitalize'
    },

    modalContent: {
        marginTop: 10,
        width: '100%'
    },

    iconModal: {
        position:  'absolute',
        left: 20,
        width: 30,
        height: 30
    },

    textModalContent: {
        position: 'absolute',
        left: 70,
        textTransform: 'uppercase',
        fontSize: 13,
        fontWeight: 800,
        color: '#454545'
    },

    stayConect:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
        borderRadius: 20,
        height: 60,
        borderBottomWidth: 4,
        borderBottomColor: '#8D8D8D',
    },

    support:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        height: 60,
        borderBottomWidth: 4,
        borderBottomColor: '#8D8D8D',
    },

    security:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        height: 60,
        borderBottomWidth: 4,
        borderBottomColor: '#8D8D8D',
    },

    closeApp:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        borderRadius: 20,
        height: 60,
        borderBottomWidth: 4,
        borderBottomColor: '#8D8D8D',
    },

    footer: {
        marginTop: 50,
        marginBottom: 5
    }


}
)

export default styles
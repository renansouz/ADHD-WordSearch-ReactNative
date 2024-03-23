import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#008F8C',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    borderArea: {
        position: 'absolute',
        width: '95%',
        height: '95%',
        borderWidth: 4,
        borderColor: '#FFF',
        borderRadius: 20
    },

    maxImg: {
        width: '85%',
        height: '50%',
        alignSelf: "center",
        marginTop: 10
    },

    buttonArea: {
        width: '80%',
        marginTop: 50,
        textAlign: "center",
        fontSize: 30,
        textTransform: "capitalize",
        color: '#FFF',
        fontWeight: 'bold',
        letterSpacing: 2,
        textShadowColor: '#000',
        textShadowRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        alignSelf: 'center',
        flexWrap: 'wrap',
        flexDirection: "row"
    },
    backGame: {
        height: 70,
        width: '90%',
        backgroundColor: '#015958',
        borderRadius: 30,
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
    },

    exitGame: {
        width: '45%',
        height: 70,
        backgroundColor: '#015958',
        borderRadius: 30,
        marginTop: 20,
        borderTopRightRadius: 0,
        justifyContent: "center",
        alignItems: "center",
        marginRight: '1%'

    },
    login: {
        width: '45%',
        height: 70,
        backgroundColor: '#015958',
        borderRadius: 30,
        borderTopLeftRadius: 0,
        marginTop: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    textButton:{
        fontSize: 30,
    }
})

export default styles
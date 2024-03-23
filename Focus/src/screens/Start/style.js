import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        position: 'absolute',
        alignItems: 'center',
    },

    focusImg: {
        height: '30%',
        width: '100%',
        marginTop: 80,
        alignSelf: 'center'
        
    },

    playButton: {
        marginTop: 150,
        backgroundColor: '#2461AA',
        width: 150,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FFF'
    },

    textPlayButton: {
        fontWeight: 700,
        fontSize: 23,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#FFF'
    },

    loginButton: {
        marginTop: 40,
        backgroundColor: '#2461AA',
        width: 150,
        height: 40,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#FFF'
    },

    textLoginButton: {
        fontWeight: 700,
        fontSize: 18,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#FFF'
    },

    footer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 0,
    },

    authImg: {
        marginRight: 100,
        width: 180,
        height: 50
    },


    configImg: {
        width: 50,
        height: 50,
        marginTop: 60,
        marginRight: 20
    }
}
)

export default styles
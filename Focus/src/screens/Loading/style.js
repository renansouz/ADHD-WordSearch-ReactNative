import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2171D0',
        alignItems: 'center',
        justifyContent: 'center',

        width: '100%',
        height: '100%'
      },
      mainImage: {
        width: 250,
        height: 250,
        borderRadius: 150
      },

      circle: {
        width: 310,
        height: 310,
        position: 'absolute',
      },

      logoAuth: {
        width: 90,
        height: 45,
        bottom: 10,
        position: 'absolute'
      },
    
    }
)

export default styles
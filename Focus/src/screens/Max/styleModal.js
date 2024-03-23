import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F9F7F7',
        width: '90%',
        alignSelf: 'center',
        marginTop: '5%',
        borderRadius: 30
    }, 
      barArea: {
        alignItems: 'center'
      },
    
      bgBar: {
        marginTop: '15%',
        marginLeft: '15%',
        width: '50%',
        backgroundColor: '#FFF',
        position: 'absolute',
        borderRadius: 10,
        borderWidth: 5,
        borderColor: '#FF8126'
      },
    
      bar: {
        height: '100%',
        backgroundColor: '#FF8126',
      },
      xpText: {
        marginTop: 5,
        textAlign: 'center',
    
      },

      maxImg:{
        marginTop: '35%',
        alignSelf: 'center',
        position: 'absolute',
      },

      itemArea: {
        flexDirection: 'row',
        width: '100%',
        alignSelf: 'center',
        marginTop: 450,
        justifyContent: 'space-around'
    },

      itemLocked: {
        width: 80,
        height: 80
      },
      
      itemSelect: {
      borderRadius: 20,
      borderWidth: 3,
      borderColor: '#D9A600',
      width: 85,
      height: 85,
    },

    confirmArea: {
      borderTopColor: '#D9A600',
      borderTopWidth: 2,
      width: '90%',
      marginTop: 20,
      marginBottom: 50,
      alignSelf:'center',
      alignItems: 'center',
      paddingTop: 20
    },

    itemName: {
      color: '#000',
      fontSize: 30,
      fontWeight: 900,
      paddingBottom: 10
    },

    confirmButtonLock: {
      backgroundColor: '#747474',
      width: '50%',
      borderRadius: 30,
      paddingVertical: 8,
      alignItems: 'center'
    }
})

export default styles;
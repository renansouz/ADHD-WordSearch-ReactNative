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
  buttonText: {
    marginTop: 10,
    color: '#FF0',
    textAlign: 'center',
    marginBottom: 30
  },

  maxArea: {
    marginTop: '30%',
    height: '50%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 50,
    paddingHorizontal: 30
  },

  maxImg:{
    marginTop: '80%',
    position: 'absolute',
  },

  firstHalf: {
    height: '100%',
    justifyContent: 'space-around'
  },

  secondHalf: {
    height: '100%',
    justifyContent: "space-around",
  },


  camisaBt: {
    backgroundColor: '#FFF930',
    borderRadius: 50,
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },

  shortBt: {
    backgroundColor: '#EB49B1',
    borderRadius: 50,
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },

  especialBt: {
    backgroundColor: '#FF3707',
    borderRadius: 50,
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },

  tenisBt: {
    backgroundColor: '#07FF5C',
    borderRadius: 50,
    height: 90,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },

  imageBt: {
    width: 60,
    height: 60,
  
  },
 
}
);

export default styles
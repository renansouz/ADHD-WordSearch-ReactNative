import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    backgroundColor: '#222',
  },

  main: {
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    marginTop: 50,
    shadowRadius: 7,
    padding:5
  },

  grid: {
    flexDirection: 'column',
  },

  row: {
    flexDirection: 'row',

  },
  cell: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1

  },
  foundCell: {
    backgroundColor: 'green',
    
  },

  foundWord: {
    textDecorationLine: 'line-through',
    color: 'green',
  },

  bg: {
    flex: 1,
    width: '100%',
    height: '100%',
    position: 'absolute',
  },

  header: {
    width: '98%',
    backgroundColor: '#2461AA',
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'space-around',
    marginTop: 45
  },

  headerContent: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 5,
    paddingBottom: 5,
  },

  textHeader: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 900,
    padding: 10,
  },

  configIcon: {
    height: 30,
    width: 30,
  },

  leftSideHeader: {
    flexDirection: 'row',
  },

  textHeaderWords: {
    justifyContent: 'center',
    paddingHorizontal: 45,
    paddingVertical: 10,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 900,
    fontFamily: 'sans-serif',
    borderRadius: 0,
    color: '#FFF',

    borderWidth: 1,
    borderColor: '#FFF',
    marginLeft: -70,
    marginLeft: -10



  },

  viewbuttom:{
  width: 40,
  height: 45,
  marginTop: 100,
  marginRight: 350,
  },

});


export default styles
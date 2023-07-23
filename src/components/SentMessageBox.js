import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const SentMessageBox = ({message, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.triangle}></View>
      <View style={styles.mesageBox}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  )
}

export default SentMessageBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    alignSelf: 'flex-end',
  },
  mesageBox: {
    backgroundColor: '#29bf12',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: 'flex-end',
  },
  messageText:{
    fontSize: 16,
    color: '#fff',
  },
  timeText : {
    fontSize: 10,
    color: '#fff',
    alignSelf: 'flex-end',
  },
});
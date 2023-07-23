import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const ReceivedMessageBox = ({message, time}) => {
  return (
    <View style={styles.container}>
      <View style={styles.triangle}></View>
      <View style={styles.mesageBox}>
        <Text style={styles.messageText}>{message}</Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

export default ReceivedMessageBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  mesageBox: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    alignSelf: 'flex-start',
  },
  messageText: {
    fontSize: 16,
    color: '#000',
  },
  timeText: {
    fontSize: 10,
    color: '#000',
    alignSelf: 'flex-end',
  },
});

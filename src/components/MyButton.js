import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';

const MyButton = ({title, onClickHandler, buttonStyle, textStyle, reverseTheme}) => {
  return (
    <TouchableOpacity
      style={[styles.container, buttonStyle, reverseTheme ? styles.buttonReverseTheme : styles.buttonTheme]}
      onPress={onClickHandler}>
      <Text style={[styles.title, textStyle, reverseTheme ? styles.textReverseTheme : styles.textTheme]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MyButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    padding: 12,
    marginVertical: 8,
    marginHorizontal: 12,
  },
  title: {
    fontSize: 16,
    color: '#29bf12',
    textAlign: 'center',
  },
  buttonTheme : {
    backgroundColor: '#fff',
  },
  textTheme : {
    color: '#29bf12',
  },
  buttonReverseTheme : {
    backgroundColor: '#29bf12',
  },
  textReverseTheme : {
    color: '#fff',
  },
});

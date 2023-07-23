import {StyleSheet, TouchableOpacity, Text, Image, View} from 'react-native';
import React, {useState} from 'react';
import PersonModal from './PersonModal';

const PersonItem = ({
  navigation,
  id,
  firstName,
  lastName,
  image,
  modalVisible,
  setModalVisible,
}) => {

  return (
    <View>
      <PersonModal
        visible={modalVisible}
        image={image}
        firstName={firstName}
        lastName={lastName}
        id={id}
        setModalVisible={setModalVisible} // Pass the function to update modal state
      />
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => { // Open the modal for the current person
          navigation.navigate('Chat', {
            id: id,
            firstName: firstName,
            lastName: lastName,
            image: image,
          });
        }}>
        <View style={styles.imageContainer}>
          <TouchableOpacity onPress={() => setModalVisible(true)}>
            <Image style={styles.image} source={{uri: image}} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>{firstName + ' ' + lastName}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PersonItem;

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 12,
    alignItems: 'center',
    elevation: 2,
    flexDirection: 'row',
    borderBottomWidth: 0.2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 500,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 500,
    borderWidth: 0.2,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
});

import React from 'react';
import {
  Modal,
  Image,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from 'react-native';
import MyButton from './MyButton';
import {useNavigation} from '@react-navigation/native';

const PersonModal = ({
  id,
  firstName,
  lastName,
  image,
  visible,
  setModalVisible,
}) => {
  const navigator = useNavigation();

  const goInfoPage = () => {
    navigator.navigate('Person', {id: id});
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={() => {
        setModalVisible(false);
      }}>
      <Pressable
        style={styles.centeredView}
        onPress={() => setModalVisible(false)}>
        <View style={styles.modalView}>
          <View style={styles.textContainer}>
            <Text style={styles.modalText}>{firstName + ' ' + lastName}</Text>
          </View>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{uri: image}} />
          </View>
          <MyButton
            title={'Info'}
            onClickHandler={() => {
              setModalVisible(false);
              goInfoPage();
            }}
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            reverseTheme={true}
          />
        </View>
      </Pressable>
    </Modal>
  );
};

export default PersonModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000aa',
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    backgroundColor: '#29bf12',
  },
  modalView: {
    backgroundColor: 'white',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
    width: 300,
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
    height: 300,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  modalText: {
    padding: 10,
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
  },
  buttonStyle: {
    width: 300,
    borderRadius: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
});

import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text
} from 'react-native';
import React, {useState, useEffect} from 'react';
import PersonItem from '../components/PersonItem';

const Chats = ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [modalStates, setModalStates] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://dummyjson.com/users?limit=10&select=id,firstName,lastName,image,',
        );
        const json = await response.json();
        setData(json.users);
        setModalStates(new Array(json.users.length).fill(false));
        setLoading(false);
        navigation.setOptions({
          headerShown: true,
        });
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <SafeAreaView
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
          backgroundColor: '#29bf12',
        }}>
          <Text style={styles.loadingText}>CHATLOG</Text>
        <ActivityIndicator size={'large'} color={'#fff'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item, index}) => (
          <PersonItem
            id={item.id}
            firstName={item.firstName}
            lastName={item.lastName}
            image={item.image}
            navigation={navigation}
            modalVisible={modalStates[index]}
            setModalVisible={state => {
              const newModalStates = [...modalStates];
              newModalStates[index] = state;
              setModalStates(newModalStates);
            }}
          />
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default Chats;

const styles = StyleSheet.create({
  loadingText: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

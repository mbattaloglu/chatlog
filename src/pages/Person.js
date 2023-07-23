import {StyleSheet, Text, SafeAreaView, View, Image, ActivityIndicator} from 'react-native';
import {useState, useEffect} from 'react';
import MyButton from '../components/MyButton';

const Person = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const id = route.params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://dummyjson.com/users/${id}?select=firstName,lastName,age,gender,email,phone,image,company`,
        );
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const goChatPage = () => {
    navigation.navigate('Chat', {
      id: id,
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.image,
    });
  };

  if (isLoading) {
    return (
      <SafeAreaView
        style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <ActivityIndicator size={'large'} color={'#29bf12'} />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: data.image}} />
      </View>
      <Text style={styles.title}>{data.firstName + ' ' + data.lastName}</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.text}>
          {data.age + " | " + data.gender.charAt(0).toUpperCase() + data.gender.slice(1)}
        </Text>
        <Text style={styles.text}>
          {data.company.department + ', ' + data.company.title}
        </Text>
        <Text style={styles.text}>{data.company.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
        <MyButton title={"Chat"} reverseTheme={true} onClickHandler={() => goChatPage()}/>
      </View>
    </SafeAreaView>
  );
};

export default Person;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff'
  },
  imageContainer: {
    width: 250,
    height: 250,
    borderRadius: 500,
    borderWidth: 1,
  },
  infoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 500,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 10,
  },
  text: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#29bf12',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
  },
});

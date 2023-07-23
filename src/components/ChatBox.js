import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


const ChatBox = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}></TextInput>
      <TouchableOpacity style={styles.button}>
      <Icon name="send" size={16} color="#000"/>
      </TouchableOpacity>
    </View>
  );
};

export default ChatBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    height: 40,
    marginVertical: 12,
    marginLeft: 12,
    marginRight: 5,
    backgroundColor: '#fff',
    borderRadius: 50,
    padding: 10,
    flex: 1,
    borderWidth: 0.1,
    borderColor: 'black',
  },
  button: {
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#DDDDDD',
    borderRadius: 50,
    padding: 10,
    marginVertical: 12,
    marginRight: 12,
  },
});

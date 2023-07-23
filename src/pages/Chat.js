import {StyleSheet, Image, View, ScrollView} from 'react-native';
import {useEffect} from 'react';
import ReceivedMessageBox from '../components/ReceivedMessageBox';
import SentMessageBox from '../components/SentMessageBox';
import ChatBox from '../components/ChatBox';
import chats from '../data/chats';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const Chat = ({route}) => {
  const navigator = useNavigation();
  const id = route.params.id;
  const firstName = route.params.firstName;
  const lastName = route.params.lastName;
  const image = route.params.image;

  useEffect(() => {
    navigator.setOptions({
      title: firstName + ' ' + lastName,
      headerTitleAlign: 'left',
      headerLeft: props => (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 15,
          }}>
          <Icon name="arrow-back" size={25} color="#fff" onPress={() => navigator.goBack()}/>
          <View
            style={{
              marginLeft: 10,
              width: 32,
              height: 32,
              backgroundColor: '#fff',
              borderRadius: 500,
            }}>
            <Image
              source={{uri: image}}
              style={{width: '100%', height: '100%'}}
            />
          </View>
        </View>
      ),
    });
  }, []);

  const chat = chats[parseInt(id) - 1];
  return (
    <View>
      <ScrollView
        style={styles.chatContainer}
        ref={ref => {
          this.scrollView = ref;
        }}
        onContentSizeChange={() =>
          this.scrollView.scrollToEnd({animated: false})
        }>
        {chat.map((message, index) => {
          if (parseInt(message.sender) === id) {
            return (
              <ReceivedMessageBox
                key={index}
                message={message.message}
                time={message.time}
              />
            );
          } else {
            return (
              <SentMessageBox
                key={index}
                message={message.message}
                time={message.time}
              />
            );
          }
        })}
      </ScrollView>
      <ChatBox />
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatContainer: {
    height: '90%',
  },
});

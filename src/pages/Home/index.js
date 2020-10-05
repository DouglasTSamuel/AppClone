import * as React from 'react';
import { Text, View } from 'react-native';
import { TextInput, TouchableHighlight } from 'react-native-gesture-handler';
import styles from './styles.js';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Home = () => {
  return (
    
    <View style={styles.containerGeral}>
      <View>
        <View style={styles.topHome}>
          <TouchableHighlight>
              <Ionicons name="home" size={40} color="#fcfcfc" />
          </TouchableHighlight>
          <TouchableHighlight>
            <Ionicons name="add-sharp" size={50} color="green" />
          </TouchableHighlight>
        </View>
      </View>
      <View style={styles.containerCentral}>
        <View>
          <View style={styles.textPag}>
            <Text style={styles.textPage}>Mensagens diretas
                <Ionicons name="chatbox-sharp" size={20} color="white" />
            </Text>
          </View>
          <TextInput style={styles.textInput} placeholder='Encontre ou comece uma conversa' placeholderTextColor="gray"></TextInput>
        </View>
      </View>
    </View>
  )
}

export default Home;

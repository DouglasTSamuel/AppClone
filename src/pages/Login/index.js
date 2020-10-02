import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = () => {
  return (
    <View style={styles.containerGeral}>
      <View>
        <View style={styles.seta}>
          <Icon name="ios-arrow-back-sharp" size={30} color="#fcfcfc" />
        </View>
        <Text style={styles.textPage}>Boas-vindas de volta!</Text>
        <Text style={styles.textTop}>Entre com seu e-mail para começar a conversar.</Text>
        <TextInput style={styles.textInput} color='white' placeholderTextColor="gray" placeholder='E-mail'></TextInput>
        <TextInput secureTextEntry={true} style={styles.textInput} color='white' placeholderTextColor="gray" placeholder='Senha'></TextInput>
        <Text style={styles.textBotton}>Esqueceu sua senha?</Text>
        <Text style={styles.textBotton}>Utilizar um gerenciador de senhas?</Text>
        <TouchableOpacity style={styles.containerButton} onPress={() => {navigation.navigate('About')}}>
          <Text style={styles.textBtn}>Entrar</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Login;
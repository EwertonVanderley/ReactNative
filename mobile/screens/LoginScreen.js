import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Login</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      <Button title="Entrar" />

      <Button
        style={styles.botao}
        title="Ir para o Cadastro"
        onPress={() => navigation.navigate('Cadastro')} />
        
    </View>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: "30%",
    height: "5%",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LoginScreen;
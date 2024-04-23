import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.tela}>

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

        <Button
          title="Entrar"
          onPress={() => navigation.navigate('Home')} />
      
      </View>

      <View style={styles.Botao}>
        <Button
          title="Ir para o Cadastro"
          onPress={() => navigation.navigate('Cadastro')} />
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginVertical: 20,
  },

  tela: {
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  input: {
    width: "30%",
    height: 30,
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  Botao: {
    margin: 10,
    alignItems: 'center',
  },
});

export default LoginScreen;
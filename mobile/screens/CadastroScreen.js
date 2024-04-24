import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [Data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tela}>
        <Text style={styles.title}>Cadastro</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome Completo"
          onChangeText={setNome}
          value={nome}
        />

        <TextInput
          style={styles.input}
          placeholder="Data de Nascimento"
          onChangeText={setData}
          value={Data}
          keyboardType="number"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirme a senha"
          onChangeText={setConfirmacaoSenha}
          value={confirmacaoSenha}
          secureTextEntry
        />
        <Button
          title="Enviar"
        />

      </View>

      <View style={styles.Botao}>

        <Button
          title="Voltar"
          onPress={() => navigation.navigate('Login')} />
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
  },

  tela: {
    alignItems: "center",
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
    flex: 1,
    alignItems: 'center',
    margin: 15,
  },

});

export default CadastroScreen;
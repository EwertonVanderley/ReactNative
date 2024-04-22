import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [Data, setData] = useState ('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');


  return (
    <View style={styles.container}>
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

      <Button title="Enviar" />

      <Button
        title="Voltar"
        onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '30%',
    height: '5%',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default CadastroScreen;
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native';


const CadastroScreen = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [Data, setData] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacaoSenha, setConfirmacaoSenha] = useState('');

  return (

    <ScrollView>
      <SafeAreaView style={styles.container}>

        <View style={styles.tela}>

          <Text style={styles.title}>Cadastro</Text>

          <Image style={styles.Imagem}
            source={{ uri: 'https://th.bing.com/th/id/R.35c328a0d41c2a5618e33bc599365686?rik=5GpxFzp1xd6oaw&riu=http%3a%2f%2fguiagoiania.com%2fup%2fclientes%2f855%2fIcone_Cadastro_Azul.png&ehk=efWyAXZ%2fTaOcj9lYsa0186uhK68t4daNLBBDiDQbFaA%3d&risl=&pid=ImgRaw&r=0' }}
          />

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

    </ScrollView>
  )
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
  },

  Imagem: {
    width: 200,
    height: 200,
    margin: 10,
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
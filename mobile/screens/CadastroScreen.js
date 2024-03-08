import React from 'react';
import { View, Text, Button } from 'react-native';

const CadastroScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Tela de Cadastro</Text>
      <Button
        title="Ir para Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

export default CadastroScreen;
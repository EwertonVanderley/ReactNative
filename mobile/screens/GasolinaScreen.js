import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, Image, SafeAreaView } from 'react-native';

const GasolinaScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Tela}>
        
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },

  Tela: {
  },

  Imagem: {
    width: 200,
    height: 200,

  },

});

export default GasolinaScreen;
import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Home</Text>
                <Button
                    style={styles.botao}
                    title="Ir para o Cadastro"
                    onPress={() => navigation.navigate('Cadastro')} />

                <Button
                    style={styles.botao}
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
      alignItems: 'center',
      paddingHorizontal: 20,
      marginVertical: 20,
    },
});

export default HomeScreen;

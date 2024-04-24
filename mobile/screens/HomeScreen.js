import React from 'react';
import { View, Text, Button, SafeAreaView, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Tela}>
                <Text style={styles.title}>Home</Text>

                <Image style={styles.Imagem}
                    source={{ uri: 'http://minaspetro.com.br/blog/wp-content/uploads/2016/09/como-lidar-com-4-tipos-de-motoristas-no-posto-de-combustivel.jpeg' }} 
                />

                <Button
                    title="Calcular a gasolina"
                    onPress={() => navigation.navigate('Gasolina')} />
                <Image style={styles.Imagem}
                    source={{ uri: 'https://static.tuasaude.com/media/article/jn/ag/imc_30445_l.jpg'}}/>
            </View>
            <View style={styles.botao}>
                <Button

                    title="Calcular seu Imc"
                    onPress={() => navigation.navigate('Imc')} />
            </View>
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },

    Tela: {
        alignItems: "center",
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },

    Imagem: {
        width: 200,
        height: 200,
        margin: 10,
    },

    botao: {
        margin: 15,
        alignItems: 'center',

    },
});

export default HomeScreen;

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';
import HomeScreen from './screens/HomeScreen';
import GasolinaScreen from './screens/GasolinaScreen';
import ImcScreen from './screens/ImcScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Gasolina" component={GasolinaScreen}/>
        <Stack.Screen name="Imc" component={ImcScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
/*Passo a passo do projeto

Ideias: 
1 - Aplicativo para Academia ...
2 - Aplicativo de venda (depósito de bebidas)

Objetivo:

====================

Conteúdo plano 1:

Conteúdo plano 2:
  Produtos
    Edição dos itens apenas para o vendedor
    Se possível, uma função que permite escolher produtos em promoção ou em falta

  Chat direto com o vendedor ou APi para o whatsapp

  Notificar atualizações e mensagens


*/

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image , Button} from 'react-native';
import { useState } from 'react';


export default function App() {
  return (
    <View style={styles.container}>
      <Text>socorro!</Text>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#def',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

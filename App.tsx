import React from 'react';
import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter';
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ //Carrega as fontes
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold
  })

  if (!fontsLoaded) {
    //Enquanto as fontes não carregarem, deixa a tela de splash em foco
    return <AppLoading /> //Segura a tela de splash
  }
  //<> -> fragment, empacota todos os componentes
  return (
    <>
      <StatusBar
        //Personaliza a barra de status
        barStyle="light-content" //Deixa a barra de status como branca
        backgroundColor="transparent"
        translucent //conteúdo cola no limite da tela
      />

      <Routes />
    </>
  );
}
import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import CalculadoraScreen from './src/screens/CalculadoraScreen';
import {styles} from './src/theme/appTheme';

export default function App() {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculadoraScreen />
    </SafeAreaView>
  );
}

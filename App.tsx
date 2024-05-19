import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { useWindowDimensions } from 'react-native';
import { TEMAS } from './src/style/style';
import Rotas from './src/rotas';

export default function App() {
  const { width } = useWindowDimensions();

  return (
    <NativeBaseProvider theme={TEMAS}>
      <Rotas screenWidth={width} />
    </NativeBaseProvider>
  );
}
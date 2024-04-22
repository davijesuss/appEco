import React from 'react';
import { VStack, Text, Image } from 'native-base';
//import { LinearGradient } from 'expo-linear-gradient';
import CirculoOque from './assets/Circulo_Oque.png';

export default function Principal() {
  return (
      <VStack flex={1} alignItems="center" justifyContent="center" p={5} style={{ backgroundColor: '#6DECB9' }}>
        <Image source={CirculoOque} alt='Imagem com o símbolo do que é IPTU verde' />

        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="gray.500"
          textAlign="center"
          mt={5}
        >
          O que é o IPTU VERDE ?
        </Text>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s,
          when an unknown printer took a galley of type and scrambled it to make
        </Text>
      </VStack>
  );
}

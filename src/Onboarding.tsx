import React, { useState } from 'react';
import { VStack, Text,Image, Pressable, Button, Flex } from 'native-base';
import { Dimensions } from 'react-native';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import { Titulo } from './components/Titulo';
import { secoes } from './utils/OnboardingElementos';

export default function Onboarding({ navigation }) {
  const [numSecao, setNumSecao] = useState(0);

  const { width, height } = Dimensions.get('window');
  const isPortrait = height > width;
  const buttonWidth = isPortrait ? '30%' : '20%';

  function avancarSecao() {
    if (numSecao < secoes.length - 1) {
      setNumSecao(numSecao + 1);
    }
  }

  function voltarSecao() {
    if (numSecao > 0) {
      setNumSecao(numSecao - 1);
    }
  }

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} style={{ backgroundColor: '#6DECB9', position: 'relative' }}>
      <Image key={secoes[numSecao].id} source={secoes[numSecao].imagem} alt={secoes[numSecao].titulo} style={{ width: '80%', height: '40%', resizeMode: 'contain' }} />
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      {secoes[numSecao].texto && (
        <Text color='white' mt={2} textAlign="center">
          {secoes[numSecao].texto}
        </Text>
      )}
      {secoes[numSecao].categorias && (
        <Flex direction="row" wrap="wrap" justifyContent="center">
          {secoes[numSecao].categorias.map((categoria, index) => (
            <Button
              key={index}
              onPress={categoria.acao}
              m={1}
              colorScheme="emerald"
              px="5"
              py="1"
              borderRadius="full"
              style={{
                width: buttonWidth,
                marginBottom: index >= 6 ? 0 : 2,
                backgroundColor: categoria.style.backgroundColor,
              }}
            >
              {categoria.nome}
            </Button>
          ))}
        </Flex>
      )}
     {numSecao === 4 && (
        <Button onPress={() => navigation.navigate('Fromulario')} // Modificado para navegar para a próxima tela
          colorScheme="cyan" mt="4" px="8" py="3" borderRadius="lg">
          Começar
        </Button>
      )}

      <Pressable onPress={voltarSecao} style={{ overflow: 'hidden', position: 'absolute', bottom: 20, left: 20, backgroundColor: 'transparent' }}>
        <Image source={SetaEsquerda} alt="Voltar" />
      </Pressable>
      <Pressable onPress={avancarSecao} style={{ overflow: 'hidden', position: 'absolute', bottom: 20, right: 20, backgroundColor: 'transparent' }}>
        <Image source={SetaDireita} alt="Avançar" />
      </Pressable>
    </VStack>
  );
}

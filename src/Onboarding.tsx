import React, { useState } from 'react';
import { VStack, Text, Image, Pressable, View ,Button, Flex } from 'native-base';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import { Titulo } from './components/Titulo';
import { secoes } from './utils/OnboardingElementos';

export default function Onboarding({ navigation }) {
  const [numSecao, setNumSecao] = useState(0);
 
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
    <VStack flex={1} alignItems="center" justifyContent="center" p={5} style={{ backgroundColor: '#11999E' }}>
      <Image key={secoes[numSecao].id} source={secoes[numSecao].imagem} alt={secoes[numSecao].titulo} />
      <Titulo>
        {secoes[numSecao].titulo}
      </Titulo>
      {secoes[numSecao].texto && (
        <Text color='white' mt={2}>
          {secoes[numSecao].texto}
        </Text>
      )}
       {secoes[numSecao].categorias && (
        <Flex direction="row" wrap="wrap" justifyContent="center">
          {secoes[numSecao].categorias.map((categoria, index) => (
            <Button  key={index} onPress={categoria.acao} m={1} colorScheme="emerald" px="5" py="1"
              borderRadius="full" // Esta linha adiciona bordas arredondadas
              style={{
                width: '30%', // Define a largura para manter 3 botões por linha, exceto a última
                marginBottom: index >= 6 ? 0 : 2 // Remove a margem inferior na última linha
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
     <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 0 }}>
        <Pressable onPress={avancarSecao} style={{ position: 'absolute', bottom: -100, left: 170 }}>
          <Image source={ SetaDireita} alt='seta para direita' />
        </Pressable>
        <Pressable onPress={voltarSecao} style={{ position: 'absolute', bottom: -200, right: 170 }}>
          <Image source={SetaEsquerda} alt='seta para esquerda' />
        </Pressable>
      </View>
    </VStack>
  );
}


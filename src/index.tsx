import React, { useState } from 'react';
import { VStack, Text, Image, Pressable, View } from 'native-base';
import CirculoOque from './assets/Circulo_Oque.png';
import CirculoCategoria from './assets/Circulo_Categorias.png';
import CirculoComeco from './assets/Circulo_Começo.png';
import CirculoComoFuniona from './assets/Circulo_Como_funciona.png';
import CirculoNossoObjetivo from './assets/Circulo_Nosso_Objetivo.png';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import { Titulo } from './components/Titulo';

export default function Principal() {
  const [numSecao, setNumSecao] = useState(0);
  const secoes = [
    {
      id: 1,
      titulo: 'O que é IPTU VERDE',
      imagem: CirculoOque,
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      id: 2,
      titulo: 'Nosso Objetivo',
      imagem: CirculoNossoObjetivo,
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      id: 4,
      titulo: 'Como funciona o Forms ?',
      imagem: CirculoComoFuniona,
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      id: 3,
      titulo: 'Categoria dos Froms',
      imagem: CirculoCategoria,
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make",
    }
  ];

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
      <Text color='white' mt={2}>
        {secoes[numSecao].texto}
      </Text>
      <View style={{ position: 'relative', flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, paddingBottom: 20 }}>
        <Pressable onPress={avancarSecao} style={{ position: 'absolute', bottom: -200, left: 170 }}>
          <Image source={ SetaDireita} alt='seta para direita' />
        </Pressable>
        <Pressable onPress={voltarSecao} style={{ position: 'absolute', bottom: -200, right: 170 }}>
          <Image source={SetaEsquerda} alt='seta para esquerda' />
        </Pressable>
      </View>
    </VStack>
  );
}

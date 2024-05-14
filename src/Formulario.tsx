import React, {useState} from 'react';
import { VStack, Box, Text, Button, Pressable, Heading, Image } from 'native-base';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import Background from './style/Background';
import { perguntasJSON } from './planilha/leitor-de-perguntas-csv';

export default function Formulario() {
    const [questionIndex, setQuestionIndex] = useState(0); // Índice da pergunta atual
  
    function avancarPergunta() {
      if (questionIndex < perguntasJSON.length - 1) {
        setQuestionIndex(questionIndex + 1);
      }
    }
  
    function voltarPergunta() {
      if (questionIndex > 0) {
        setQuestionIndex(questionIndex - 1);
      }
    }
  
    return (
      <VStack style={Background.containerAzul} alignItems="center" justifyContent="center" p={5}>
        <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width="100%" height="40%" justifyContent="center" alignItems="center">
          <Heading size="md" mb={3} color={'#0C7CBA'}>{perguntasJSON[questionIndex].id}</Heading>
          <Text fontSize="sm" mb={4} mt={4}>
            {perguntasJSON[questionIndex].pergunta}
          </Text>
        </Box>
        <Box mt={5} borderRadius="lg" maxWidth="90%" width="100%">
          <Button style={Background.roundedButton} mb={2} onPress={() => console.log('Sim')}>
            <Text style={{ color: 'black' }}>Sim</Text>
          </Button>
          <Button mt={2} style={{...Background.roundedButton, backgroundColor: 'white'} } onPress={() => console.log('Não')}>
            <Text style={{ color: 'black' }}>Não</Text>
          </Button>
        </Box>
        <VStack position="absolute" bottom={5} width="100%" px={5} flexDirection="row" justifyContent="space-between">
          <Pressable onPress={voltarPergunta}>
            <Image source={SetaEsquerda} alt="Voltar" />
          </Pressable>
          <Pressable onPress={avancarPergunta}>
            <Image source={SetaDireita} alt="Avançar" />
          </Pressable>
        </VStack>
      </VStack>
    );
  }
  

import React, { useState, useEffect } from 'react';
import { VStack, Box, Text, Button, Pressable, Modal, ScrollView, Heading, Image } from 'native-base';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import Background from './style/Background';
import data from './data.json'; // Importe os dados da planilha
import AsyncStorage from '@react-native-async-storage/async-storage';

//chave | valor para a pontuação
const STORAGE_POINT = '@ponto';
//chave | valor para a resposta
const STORAGE_ANSWERS = '@answers';
const STORAGE_MODAL_POINTS = '@modalPoints';


export default function Formulario() {
    const [questionIndex, setQuestionIndex] = useState(0); // Índice da pergunta atual
    const [totalPoints, setTotalPoints] = useState(0); // Pontos acumulados
    const [answers, setAnswers] = useState([]); // Respostas armazenadas
    const [showModal, setShowModal] = useState(false);
    const [modalPoints, setModalPoints] = useState(0);

    useEffect(() => {
        limparDados();
      recuperarDados();
  }, []);
    
    useEffect(() => {
      armazenarDados();
  }, [totalPoints, answers, modalPoints, questionIndex]);

  useEffect(() => {
      calcularModalPoints();
  }, [questionIndex, totalPoints]);

  const recuperarDados = async () => {
      try {
          const pontosRecuperados = await AsyncStorage.getItem(STORAGE_POINT);
          const respostasRecuperadas = await AsyncStorage.getItem(STORAGE_ANSWERS);
          const modalPointsRecuperados = await AsyncStorage.getItem(STORAGE_MODAL_POINTS);
          if (pontosRecuperados !== null) {
              setTotalPoints(parseInt(pontosRecuperados));
          }
          if (respostasRecuperadas !== null) {
              setAnswers(JSON.parse(respostasRecuperadas));
          }
          if (modalPointsRecuperados !== null) {
              setModalPoints(parseInt(modalPointsRecuperados));
          }
      } catch (error) {
          console.error('Erro ao recuperar os dados:', error);
      }
  };

  const armazenarDados = async () => {
      try {
          await AsyncStorage.setItem(STORAGE_POINT, totalPoints.toString());
          await AsyncStorage.setItem(STORAGE_ANSWERS, JSON.stringify(answers));
          await AsyncStorage.setItem(STORAGE_MODAL_POINTS, modalPoints.toString());
          console.log('Dados armazenados com sucesso.');
      } catch (error) {
          console.error('Erro ao armazenar os dados:', error);
      }
  };

  const calcularModalPoints = () => {
      let points = 0;
      for (let i = 0; i <= questionIndex; i++) {
          points += answers[i]?.isYes ? parseInt(data[i].pontos) : 0;
      }
      setModalPoints(points);
  };

  const limparDados = async () => {
    try {
        await AsyncStorage.removeItem(STORAGE_POINT);
        await AsyncStorage.removeItem(STORAGE_ANSWERS);
        setTotalPoints(0);
        setAnswers([]);
        console.log('Dados armazenados limpos.');
    } catch (error) {
        console.error('Erro ao limpar os dados:', error);
    }
};

  const avancarPergunta = () => {
      if (questionIndex < data.length - 1) {
          setQuestionIndex(questionIndex + 1);
      } else {
          finalizarFormulario();
      }
  };

  const voltarPergunta = () => {
      if (questionIndex > 0) {
            const previousIndex = questionIndex - 1;
            const previousAnswer = answers[previousIndex];

            if (previousAnswer && previousAnswer.isYes) {
                const previousPoints = parseInt(data[previousIndex].pontos);
                setTotalPoints(totalPoints - previousPoints);
            }

            setQuestionIndex(previousIndex);
      }
  };

  const handleAnswer = (isYes) => {
      const currentPoints = parseInt(data[questionIndex].pontos);
      if (isYes) {
          setTotalPoints(totalPoints + currentPoints);
      }

      const newAnswers = [...answers];
      newAnswers[questionIndex] = { isYes };
      setAnswers(newAnswers);

      avancarPergunta();
  };

  const finalizarFormulario = () => {
      setShowModal(true);
  };
    return (
        <VStack style={Background.containerAzul} alignItems="center" justifyContent="center" p={5}>
            <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width="100%" height="40%" justifyContent="center" alignItems="center">
                <Heading size="sm" mb={3} color={'#0C7CBA'}>{data[questionIndex].categoria}</Heading>
                <Text fontSize="sm" mb={4} mt={4}>
                    {data[questionIndex].pergunta}
                </Text>
            </Box>
            <Box mt={5} borderRadius="lg" maxWidth="90%" width="100%">
                <Button style={Background.roundedButton} mb={2} onPress={() => handleAnswer(true)} onPress={() => handleAnswer(true)}
                    isDisabled={questionIndex === data.length - 1}>
                    <Text style={{ color: 'black' }}>Sim</Text>
                </Button>
                <Button mt={2} style={{ ...Background.roundedButton, backgroundColor: 'white' }} onPress={() => handleAnswer(false)} 
                    isDisabled={questionIndex === data.length - 1}>
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
            {/* Exibir pontos acumulados */}
            <Box mt={5}>
                <Text fontSize="lg" color="white">Pontos Acumulados: {totalPoints}</Text>
            </Box>
        



        {/* Modal */}
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                <Modal.Content>
                    <Modal.Header>Informações do Formulário</Modal.Header>
                    <Modal.Body>
                        <ScrollView>
                            {data.map((pergunta, index) => (
                                <Box key={index} p={2} borderBottomWidth={1} borderColor="gray.200">
                                    <Text>Pergunta: {pergunta.pergunta}</Text>
                                    <Text>Resposta: {answers[index]?.isYes ? 'Sim' : 'Não'}</Text>
                                    <Text>Pontuação até aqui: {modalPoints}</Text>
                                </Box>
                            ))}
                        </ScrollView>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onPress={() => setShowModal(false)}>Fechar</Button>
                    </Modal.Footer>
                </Modal.Content>
            </Modal>
    </VStack>
    );
}

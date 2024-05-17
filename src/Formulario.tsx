import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { VStack, Box, Text, Button, Pressable, Heading, Image } from 'native-base';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import Background from './style/Background';
import data from './utils/data.json'; // Importe os dados da planilha
import CustomModal from './modal/modalForms';

export default function Formulario() {
    const [questionIndex, setQuestionIndex] = useState(0); // Índice da pergunta atual
    const [totalPoints, setTotalPoints] = useState(0); // Pontos acumulados
    const [modalVisible, setModalVisible] = useState(false);

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    function avancarPergunta() {
        if (questionIndex < data.length - 1) {
            setQuestionIndex(questionIndex + 1);
        }
    }

    function voltarPergunta() {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    function handleAnswer(isYes) {
        const currentPoints = parseInt(data[questionIndex].pontos);
        if (isYes) {
            setTotalPoints(totalPoints + currentPoints);
        }
        avancarPergunta();
    }

    return (
        <VStack style={Background.containerAzul} alignItems="center" justifyContent="center" p={5}>
            <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width="100%" height="40%" justifyContent="center" alignItems="center">
                <Heading size="md" mb={3} color={'#0C7CBA'}>{data[questionIndex].id}</Heading>
                <Text fontSize="sm" mb={4} mt={4}>
                    {data[questionIndex].pergunta}
                </Text>
                <Button onPress={toggleModal}>
                <Ionicons name="information-circle-outline" size={24} color="black" />
                </Button>
            <CustomModal visible={modalVisible} onClose={toggleModal} id={data[questionIndex].id} />

            </Box>
            <Box mt={5} borderRadius="lg" maxWidth="90%" width="100%">
                <Button style={Background.roundedButton} mb={2} onPress={() => handleAnswer(true)}>
                    <Text style={{ color: 'black' }}>Sim</Text>
                </Button>
                <Button mt={2} style={{ ...Background.roundedButton, backgroundColor: 'white' }} onPress={() => handleAnswer(false)}>
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
           
        </VStack>
    );
}

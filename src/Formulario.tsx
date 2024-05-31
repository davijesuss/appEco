import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { VStack, Box, Text, Button, Pressable, Heading, Image } from 'native-base';
import SetaDireita from './assets/Circulo_Link_Direita.png';
import SetaEsquerda from './assets/Circulo_Link_Esquerda.png';
import Background from './style/Background';
import data from './utils/data.json'; // Importe os dados da planilha
import CustomModal from './modal/modalForms';
import AsyncStorage from '@react-native-async-storage/async-storage';

//chave | valor para a pontuação
const STORAGE_POINT = '@ponto';
//chave | valor para a resposta
const STORAGE_ANSWERS = '@answers';

export default function Formulario() {
    const [questionIndex, setQuestionIndex] = useState(0); // Índice da pergunta atual
    const [totalPoints, setTotalPoints] = useState(0); // Pontos acumulados
    const [answers, setAnswers] = useState([]); // Respostas armazenadas
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        limparDados();
        recuperarDados();
    }, []);
    
    useEffect(() => {
        armazenarDados();
    }, [totalPoints, answers, questionIndex]);

    //recuperando dados com armazenamento local com async-storage
    const recuperarDados = async () => {
        try {
            const pontosRecuperados = await AsyncStorage.getItem(STORAGE_POINT);
            const respostasRecuperadas = await AsyncStorage.getItem(STORAGE_ANSWERS);
            if (pontosRecuperados !== null) {
                setTotalPoints(parseInt(pontosRecuperados));
            }
            if (respostasRecuperadas !== null) {
                setAnswers(JSON.parse(respostasRecuperadas));
            }
        } catch (error) {
            console.error('Erro ao recuperar os dados:', error);
        }
    };

    //armazenando dados com armazenamento local com async-storage
    const armazenarDados = async () => {
        try {
            await AsyncStorage.setItem(STORAGE_POINT, totalPoints.toString());
            await AsyncStorage.setItem(STORAGE_ANSWERS, JSON.stringify(answers));
            console.log('Dados armazenados com sucesso.');
        } catch (error) {
            console.error('Erro ao armazenar os dados:', error);
        }
    };

    //limpando dados com armazenamento local com async-storage
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

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };

    function avancarPergunta() {
        if (questionIndex < data.length - 1) {
            setQuestionIndex(questionIndex + 1);
        }
    }

    const voltarPergunta = () => {
        if (questionIndex > 0) {
            const previousIndex = questionIndex - 1;
            const previousAnswer = answers[previousIndex];

            if (previousAnswer && previousAnswer.isYes) {
                const previousPoints = parseInt(data[previousIndex].pontos);
                setTotalPoints(prevPoints => Math.max(0, prevPoints - previousPoints));
            }

            setQuestionIndex(previousIndex);
        }
    };

    function handleAnswer(isYes) {
        const currentPoints = parseInt(data[questionIndex].pontos);
        if (isYes) {
            setTotalPoints(totalPoints + currentPoints);
        }
        const newAnswers = [...answers];
        newAnswers[questionIndex] = { isYes };
        setAnswers(newAnswers);

        avancarPergunta();
    }

    const getBackgroundColor = () => {
        const color = data[questionIndex]?.cor || '0C7CBA';
        return `#${color.substring(0, 6)}`; // Remover alpha se presente
    };
    

    return (
        <VStack style={[Background.containerAzul, { backgroundColor: getBackgroundColor() }]} alignItems="center" justifyContent="center" p={5}>
            <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width="100%" height="40%" justifyContent="center" alignItems="center">
                <Heading size="sm" mb={3} color={'#0C7CBA'}>{data[questionIndex].categoria}</Heading>
                <Text fontSize="sm" mb={4} mt={4}>
                    {data[questionIndex].pergunta}
                </Text>
                <Button onPress={toggleModal}>
                    <Ionicons name="information-circle-outline" size={24} color="black" />
                </Button>
                <CustomModal visible={modalVisible} onClose={toggleModal} id={data[questionIndex].id} />
            </Box>
            <Box mt={5} borderRadius="lg" maxWidth="90%" width="100%">
                <Button style={Background.roundedButton} mb={2} onPress={() => handleAnswer(true)} isDisabled={questionIndex === data.length - 1}>
                    <Text style={{ color: 'black' }}>Sim</Text>
                </Button>
                <Button mt={2} style={{ ...Background.roundedButton, backgroundColor: 'white' }} onPress={() => handleAnswer(false)} isDisabled={questionIndex === data.length - 1}>
                    <Text style={{ color: 'black' }}>Não</Text>
                </Button>
            </Box>
            <VStack position="absolute" bottom={5} width="100%" px={5} flexDirection="row" justifyContent="space-between">
                <Pressable onPress={voltarPergunta} isDisabled={questionIndex === 0}>
                    <Image source={SetaEsquerda} alt="Voltar" />
                </Pressable>
                <Pressable onPress={avancarPergunta} isDisabled={questionIndex === data.length - 1}>
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
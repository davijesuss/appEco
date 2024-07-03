import React, { useState } from 'react';
import { VStack, Box, Button, Text } from 'native-base';
import { useFormulario } from './ganchos/useFormulario';
import CartaoPergunta from './components/CartaoPergunta';
import BotoesNavegacao from './components/BotoesNavegacao';
import ExibicaoPontos from './components/ExibicaoPontos';
import Background from './style/Background';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from './rotas';
import dados from './utils/data.json';

export default function Formulario() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const {
        indicePergunta,
        pontosTotais,
        pontosPorCategoria,
        respostas,
        respondeuPerguntaAtual,
        avancarPergunta,
        voltarPergunta,
        handleAnswer,
        getCorFundo,
    } = useFormulario();

    const [modalVisivel, setModalVisivel] = useState(false);
    const toggleModal = () => {
        setModalVisivel(!modalVisivel);
    };

    const irParaConquista = () => {
        navigation.navigate('Conquista', { totalPoints: pontosTotais });
    };

    return (
        <VStack style={[Background.containerAzul, { backgroundColor: getCorFundo() }]} alignItems="center" justifyContent="center" p={5}>
            <CartaoPergunta
                pergunta={dados[indicePergunta]}
                onAnswer={handleAnswer}
                modalVisivel={modalVisivel}
                toggleModal={toggleModal}
            />
            <Box mt={5} borderRadius="lg" maxWidth="90%" width="100%">
                <Button style={Background.roundedButton} mb={2} onPress={() => handleAnswer(true)} isDisabled={indicePergunta === dados.length - 1}>
                    <Text style={{ color: 'black' }}>Sim</Text>
                </Button>
                <Button mt={2} style={{ ...Background.roundedButton }} onPress={() => handleAnswer(false)} isDisabled={indicePergunta === dados.length - 1}>
                    <Text style={{ color: 'black' }}>Não</Text>
                </Button>
            </Box>
            <BotoesNavegacao
                indicePergunta={indicePergunta}
                avancarPergunta={avancarPergunta}
                voltarPergunta={voltarPergunta}
                comprimentoDados={dados.length}
                respondeuPerguntaAtual={respondeuPerguntaAtual}
            />
           
            <Button onPress={() => navigation.navigate('Resultados', { pointsByCategory: pontosPorCategoria })} mt={5}>
                Ver Pontos por Categoria
            </Button>
            
            {indicePergunta === dados.length - 1 && (
                <Button onPress={irParaConquista} mt={5}>
                    Ver Conquista
                </Button>
            )}
        </VStack>
    );
}

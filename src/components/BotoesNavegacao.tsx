import React from 'react';
import { VStack, Pressable, Image } from 'native-base';
import SetaDireita from '../assets/Circulo_Link_Direita.png';
import SetaEsquerda from '../assets/Circulo_Link_Esquerda.png';

const BotoesNavegacao = ({ indicePergunta, avancarPergunta, voltarPergunta, comprimentoDados, respondeuPerguntaAtual }) => {
    return (
        <VStack style={{ overflow: 'hidden', position: 'absolute', bottom: 20, right: 20, backgroundColor: 'transparent' }} flexDirection="row" justifyContent="space-between" width="100%" px={5}>
            <Pressable onPress={voltarPergunta} isDisabled={indicePergunta === 0}>
                <Image source={SetaEsquerda} alt="Voltar" />
            </Pressable>
            <Pressable onPress={avancarPergunta} isDisabled={indicePergunta === comprimentoDados - 1 || !respondeuPerguntaAtual}>
                <Image source={SetaDireita} alt="Avançar" />
            </Pressable>
        </VStack>
    );
};

export default BotoesNavegacao;

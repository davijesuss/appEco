import AsyncStorage from '@react-native-async-storage/async-storage';

const PONTO_ARMAZENAMENTO = '@ponto';
const RESPOSTAS_ARMAZENAMENTO = '@respostas';

export const recuperarDados = async () => {
    try {
        const pontosRecuperados = await AsyncStorage.getItem(PONTO_ARMAZENAMENTO);
        const respostasRecuperadas = await AsyncStorage.getItem(RESPOSTAS_ARMAZENAMENTO);
        return {
            pontos: pontosRecuperados !== null ? parseInt(pontosRecuperados) : 0,
            respostas: respostasRecuperadas !== null ? JSON.parse(respostasRecuperadas) : [],
        };
    } catch (error) {
        console.error('Erro ao recuperar os dados:', error);
        return { pontos: 0, respostas: [] };
    }
};

export const armazenarDados = async (totalPoints: number, answers: any[]) => {
    try {
        await AsyncStorage.setItem(PONTO_ARMAZENAMENTO, totalPoints.toString());
        await AsyncStorage.setItem(RESPOSTAS_ARMAZENAMENTO, JSON.stringify(answers));
        console.log('Dados armazenados com sucesso.');
    } catch (error) {
        console.error('Erro ao armazenar os dados:', error);
    }
};

export const limparDados = async () => {
    try {
        await AsyncStorage.removeItem(PONTO_ARMAZENAMENTO);
        await AsyncStorage.removeItem(RESPOSTAS_ARMAZENAMENTO);
        console.log('Dados armazenados limpos.');
    } catch (error) {
        console.error('Erro ao limpar os dados:', error);
    }
};

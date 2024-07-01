import { useState, useEffect } from 'react';
import { recuperarDados, armazenarDados, limparDados } from '../servicos/servicoArmazenamento';
import dados from '../utils/data.json';

export const useFormulario = () => {
    const [indicePergunta, setIndicePergunta] = useState(0);
    const [pontosTotais, setPontosTotais] = useState(0);
    const [pontosPorCategoria, setPontosPorCategoria] = useState<{ [key: string]: number }>({});
    const [respostas, setRespostas] = useState([]);
    const [respondeuPerguntaAtual, setRespondeuPerguntaAtual] = useState(false);

    useEffect(() => {
        limparDados();
        recuperarDados().then(({ pontos, respostas }) => {
            setPontosTotais(pontos);
            setRespostas(respostas);
        });
    }, []);

    useEffect(() => {
        armazenarDados(pontosTotais, respostas);
    }, [pontosTotais, respostas]);

    const avancarPergunta = () => {
        if (indicePergunta < dados.length - 1) {
            setIndicePergunta(indicePergunta + 1);
            setRespondeuPerguntaAtual(respostas[indicePergunta + 1] !== undefined);
        }
    };

    const voltarPergunta = () => {
        if (indicePergunta > 0) {
            setIndicePergunta(indicePergunta - 1);
            setRespondeuPerguntaAtual(true);
        }
    };

    const handleAnswer = (isYes: boolean) => {
        const pontosAtuais = parseInt(dados[indicePergunta].pontos);
        const respostaAnterior = respostas[indicePergunta];

        if (!respostaAnterior || respostaAnterior.isYes !== isYes) {
            if (isYes) {
                setPontosTotais(prevPoints => prevPoints + pontosAtuais);
                setPontosPorCategoria(prev => ({
                    ...prev,
                    [dados[indicePergunta].categoria]: (prev[dados[indicePergunta].categoria] || 0) + pontosAtuais
                }));
            } else if (respostaAnterior && respostaAnterior.isYes) {
                setPontosTotais(prevPoints => Math.max(0, prevPoints - pontosAtuais));
                setPontosPorCategoria(prev => ({
                    ...prev,
                    [dados[indicePergunta].categoria]: (prev[dados[indicePergunta].categoria] || 0) - pontosAtuais
                }));
            }
        }

        const novasRespostas = [...respostas];
        novasRespostas[indicePergunta] = { isYes };
        setRespostas(novasRespostas);
        setRespondeuPerguntaAtual(true);

        avancarPergunta();
    };

    const getCorFundo = () => {
        const cor = dados[indicePergunta]?.cor || '0C7CBA';
        return `#${cor.substring(0, 6)}`;
    };

    return {
        indicePergunta,
        pontosTotais,
        pontosPorCategoria,
        respostas,
        respondeuPerguntaAtual,
        avancarPergunta,
        voltarPergunta,
        handleAnswer,
        getCorFundo,
    };
};

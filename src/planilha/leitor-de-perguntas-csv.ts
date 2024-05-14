import * as fs from 'fs';
const csvParser = require('csv-parser');

interface Pergunta {
    id: string;
    pergunta: string;
}

function readCSV(filePath: string): Promise<Pergunta[]> {
    return new Promise((resolve, reject) => {
        const perguntas: Pergunta[] = [];

        fs.createReadStream(filePath)
            .pipe(csvParser())
            .on('data', (row: any) => {

                const id = row['ID'];
                const pergunta = row['PERGUNTA_REQUISITO'];
                
                perguntas.push({ id, pergunta });
            })
            .on('end', () => {
                resolve(perguntas);
            })
            .on('error', (error: any) => {
                reject(error);
            });
    });
}

export async function printPerguntas(filePath: string) {
    try {
        const perguntas = await readCSV(filePath);
        console.log("Perguntas encontradas:");
        const perguntasJSON: string[] = [];
        perguntas.forEach((pergunta, index) => {
            const perguntaComID = {
                id: pergunta.id,
                pergunta: pergunta.pergunta
            };
            const perguntaJSON = JSON.stringify(perguntaComID, null, 2);
            console.log(`${perguntaJSON}`);
            perguntasJSON.push(perguntaJSON);
        });
        return perguntasJSON; // Alteração aqui
    } catch (error) {
        console.error("Ocorreu um erro ao ler o arquivo CSV:", error);
        return [];
    }
}

export const perguntasJSON: { id: string; pergunta: string }[] = [];

const csvFilePath = 'C:\\Users\\eric7\\OneDrive\\Área de Trabalho\\TCC\\planilha\\PERGUNTAS TCC - QUESTÕES.csv';
printPerguntas(csvFilePath);

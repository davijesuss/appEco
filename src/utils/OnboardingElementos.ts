import CirculoOque from '../assets/Circulo_Oque.png';
import CirculoCategoria from '../assets/Circulo_Categorias.png';
import CirculoComeco from '../assets/Circulo_Começo.png';
import CirculoComoFuniona from '../assets/Circulo_Como_funciona.png';
import CirculoNossoObjetivo from '../assets/Circulo_Nosso_Objetivo.png';
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
      id: 3,
      titulo: 'Como funciona o Forms ?',
      imagem: CirculoComoFuniona,
      texto: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make",
    },
    {
      id: 4,
      titulo: 'Categoria dos Froms',
      imagem: CirculoCategoria,
      categorias: [
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 1') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 2') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 3') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 4') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 5') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 6') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 7') },
        { nome: 'Lorem ipsum', acao: () => console.log('Ação 8') },
      ]
    },
    {
      id: 5,
      titulo: 'Começar o questionario ?',
      imagem: CirculoComeco,
      botao: () => console.log('Iniciando questionário...'), // Adiciona a ação do botão
    },

  ];

  export {secoes}

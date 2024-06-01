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
    texto: 'O Programa de Certificação Sustentável "IPTU Verde", é uma iniciativa da Prefeitura Municipal do Salvador - PMS, que visa incentivar empreendimentos imobiliários residenciais, comerciais, mistos, institucionais e industriais a realizarem ações e práticas de sustentabilidade, concedendo-lhes a desoneração tributária ao IPTU',
  },
  {
    id: 2,
    titulo: 'Nosso Objetivo',
    imagem: CirculoNossoObjetivo,
    texto: 'Incentivar a sustentabilidade urbana através de descontos no valor do IPTU para empreendimentos que adotem medidas de estímulo à proteção, à preservação e à recuperação do meio ambiente, minimizando os efeitos negativos e impactos decorrentes da urbanização, criando um modelo integrado de desenvolvimento e sustentabilidade movimentando a economia da cidade',
  },
  {
    id: 3,
    titulo: 'Como funciona o Forms ?',
    imagem: CirculoComoFuniona,
    texto: 'Este questionário tem por objetivo calcular a pontuação que determinado slicitando atende hoje quanto à aplicação dos requisitos do Programa, apresentando ao final a sua pontuação e colocação nos indices de desoneração tributária (Bronze, Prata ou Ouro).',
  },
  {
    id: 4,
    titulo: 'Categoria dos Forms',
    imagem: CirculoCategoria,
    categorias: [
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 1'), style: { backgroundColor: 'rgba(12, 124, 186, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 2'), style: { backgroundColor: 'rgba(108, 136, 0, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 3'), style: { backgroundColor: 'rgba(201, 45, 57, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 4'), style: { backgroundColor: 'rgba(151, 87, 19, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 5'), style: { backgroundColor: 'rgba(252, 196, 56, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 6'), style: { backgroundColor: 'rgba(239, 141, 34, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 7'), style: { backgroundColor: 'rgba(94, 94, 94, 1)', color: 'white' } },
      { nome: 'Lorem ipsum', acao: () => console.log('Ação 8'), style: { backgroundColor: 'rgba(75, 90, 194, 1)', color: 'white' } },
    ]
  },
  {
    id: 5,
    titulo: 'Começar o questionario ?',
    imagem: CirculoComeco,
    botao: () => console.log('Iniciando questionário...'), // Adiciona a ação do botão
  },
];

export { secoes };
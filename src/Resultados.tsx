import React from 'react';
import { VStack, Box, Text, Button, HStack, Image } from 'native-base';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './rotas'; // Importe o tipo RootStackParamList
import data from './utils/data.json'; // Importe os dados da planilha

// Importe suas imagens SVG
import IconeCategoria01 from './assets/Categoria1.png';
import IconeCategoria02 from './assets/Categoria02.png';
import IconeCategoria03 from './assets/Categoria03.png';
import IconeCategoria04 from './assets/Categoria03.png'; 
import IconeCategoria05 from './assets/Categoria04.png';
import IconeCategoria06 from './assets/Categoria05.png';
import IconeCategoria07 from './assets/Categoria06.png';
import IconeCategoria08 from './assets/Categoria07.png'; // Adicione mais importações conforme necessário

type ResultadosRouteProp = RouteProp<RootStackParamList, 'Resultados'>;

const Resultados = () => {
  const navigation = useNavigation();
  const route = useRoute<ResultadosRouteProp>();
  const { pointsByCategory } = route.params;

  const totalPointsByCategory = data.reduce((acc, item) => {
    if (!acc[item.categoria]) {
      acc[item.categoria] = parseInt(item.pontosTotais);
    }
    return acc;
  }, {} as { [key: string]: number });

  const getCategoryColor = (category: string) => {
    const item = data.find(d => d.categoria === category);
    return item ? `#${item.cor.substring(0, 6)}` : '#000000';
  };

  const lightenColor = (color: string, percent: number) => {
    const num = parseInt(color.replace("#",""), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) + amt;
    const G = (num >> 8 & 0x00FF) + amt;
    const B = (num & 0x0000FF) + amt;
    return `#${(0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1).toUpperCase()}`;
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'GESTÃO SUSTENTÁVEL DAS ÁGUAS':
        return IconeCategoria01;
      case 'EFICIÊNCIA E ALTERNATIVAS ENERGÉTICAS': 
        return IconeCategoria02;
      case 'PROJETO SUSTENTÁVEL':
        return IconeCategoria03;
      case 'QUALIDADE URBANA': 
        return IconeCategoria04;
      case 'VERDE URBANO': 
        return IconeCategoria05;
      case 'CONTRIBUIÇÕES PARA ADAPTAÇÃO BASEADA EM ECOSSISTEMAS (ABE)': 
        return IconeCategoria06;
      case 'GESTÃO DE RESÍDUOS': 
        return IconeCategoria07;
      case 'BONIFICAÇÕES': 
        return IconeCategoria08;
      default:
        return null; 
    }
  };

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width="100%" justifyContent="center" alignItems="center">
        <Text fontSize="xl" mb={4}>Pontos por Categoria</Text>
        {Object.keys(pointsByCategory).map((category) => {
          const totalPoints = totalPointsByCategory[category];
          const earnedPoints = pointsByCategory[category];
          const percentage = (earnedPoints / totalPoints) * 100;
          const categoryColor = getCategoryColor(category);
          const highlightedColor = lightenColor(categoryColor, 30); // Aumente ou diminua a porcentagem conforme necessário
          const categoryIcon = getCategoryIcon(category);

          return (
            <Box key={category} mb={2} width="100%" alignItems="center">
              <HStack width="90%" bg="gray.200" borderRadius="md" overflow="hidden" alignItems="center">
                <Box width={`${percentage}%`} bg={highlightedColor} p={2} flexDirection="row" alignItems="center">
                  {categoryIcon && (
                    <Image source={categoryIcon} alt={category} size={5} mr={2} />
                  )}
                  <Text fontSize="sm" color="white">{earnedPoints} / {totalPoints}</Text>
                </Box>
              </HStack>
            </Box>
          );
        })}
      </Box>
      <Button mt={5} onPress={() => navigation.goBack()}>
        Voltar
      </Button>
    </VStack>
  );
};

export default Resultados;
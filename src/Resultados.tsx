import React from 'react';
import { VStack, Box, Text, Button, HStack } from 'native-base';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './rotas'; // Importe o tipo RootStackParamList
import data from './utils/data.json'; // Importe os dados da planilha

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

  return (
    <VStack flex={1} alignItems="center" justifyContent="center" p={5}>
      <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width="100%" justifyContent="center" alignItems="center">
        <Text fontSize="xl" mb={4}>Pontos por Categoria</Text>
        {Object.keys(pointsByCategory).map((category) => {
          const totalPoints = totalPointsByCategory[category];
          const earnedPoints = pointsByCategory[category];
          const percentage = (earnedPoints / totalPoints) * 100;
          const categoryColor = getCategoryColor(category);

          return (
            <Box key={category} mb={2} width="100%" alignItems="center">
              <HStack width="90%" bg="gray.200" borderRadius="md" overflow="hidden" alignItems="center">
                <Box width={`${percentage}%`} bg={categoryColor} p={2} alignItems="center">
                  <Text fontSize="sm" color="white">{category}: {earnedPoints} / {totalPoints}</Text>
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

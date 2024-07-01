import React from 'react';
import { Box, Text } from 'native-base';

const DisplayPontos = ({ pontosTotais }) => {
    return (
        <Box mt={5}>
            <Text fontSize="lg" color="white">Pontos Acumulados: {pontosTotais}</Text>
        </Box>
    );
};

export default DisplayPontos;

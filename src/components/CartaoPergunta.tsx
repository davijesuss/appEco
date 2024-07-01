import React from 'react';
import { Box, Heading, Text, Button, Image } from 'native-base';
import CustomModal from '../modal/modalForms';
import { Ionicons } from '@expo/vector-icons';

const CartaoPergunta = ({ pergunta, onAnswer, modalVisivel, toggleModal }) => {
    return (
        <Box bg="white" p={4} borderRadius="lg" maxWidth="90%" width={{ base: "95%", md: "85%", lg: "70%" }} height="auto" justifyContent="center" alignItems="center">
            <Heading size="sm" mb={3} color={'#0C7CBA'}>{pergunta.categoria}</Heading>
            <Text fontSize="sm" mb={4} mt={4}>
                {pergunta.pergunta}
            </Text>
            <Button onPress={toggleModal}>
                <Ionicons name="information-circle-outline" size={24} color="black" />
            </Button>
            <CustomModal visible={modalVisivel} onClose={toggleModal} id={pergunta.id} />
        </Box>
    );
};

export default CartaoPergunta;

import React from 'react';
import { Modal, Text, Button, View } from 'react-native';
import data from '../utils/data.json'; // Importe os dados da planilha

export default function CustomModal({ visible, onClose, id }) {
  // Encontre o objeto no array 'data' com base no 'id' passado como argumento
  const requisito = data.find(item => item.id === id);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={{ flex: 1, height: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.5)' }}>
        <View style={{ backgroundColor: 'white', padding: 50, borderRadius: 10, width: '80%' }}>
          <Text style={{ textAlign: 'center' }}>{requisito.categoria}</Text>
          <Text></Text>
          <Text style={{ textAlign: 'center' }}>{requisito.descricao_requisito}</Text>
          <Button title="Fechar" onPress={onClose} />
        </View>
      </View>
    </Modal>
  );
}

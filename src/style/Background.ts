import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  containerAzul: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
    // Estilo padrão de fundo para plataformas que não suportam gradiente
    backgroundColor: '#0C7CBA',
    // Gradiente linear para plataformas que suportam
    ...Platform.select({
      ios: {
        background: 'linear-gradient(180deg, #3C3C3C 100%, #0C7CBA 100%, #000000 100%)',
      },
      android: {
        backgroundColor: '#0C7CBA', // Mantém o plano de fundo azul para Android
      },
      default: {
        backgroundColor: '#0C7CBA', // Outras plataformas (como web)
      },
    }),
  },
  roundedButton: {
    borderRadius: 10, 
    marginBottom: 2,
    color: 'black'
  },
});

export default styles;

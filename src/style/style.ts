import { extendTheme } from 'native-base';

export const TEMAS = extendTheme({
  colors: {
    gray: {
      300: '#8D8D99'
    },
    blue: {
      500: '#339CFF',
      800: '#0B3B60'
    },
    white: '#fff',
    black: '#000'
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
    xl: 24
  },
  fonts: {
    heading: 'Inter_700Bold',
    body: 'Inter_400Regular',
    mono: 'Inter_500Medium',
  },
  fontConfig: {
    Inter: {
      400: {
        normal: 'Inter_400Regular',
      },
      500: {
        normal: 'Inter_500Medium',
      },
      700: {
        normal: 'Inter_700Bold',
      },
    },
    Poppins: {
      400: {
        normal: 'Poppins_400Regular',
      },
      500: {
        normal: 'Poppins_500Medium',
      },
      700: {
        normal: 'Poppins_700Bold',
      },
    },
  },
});

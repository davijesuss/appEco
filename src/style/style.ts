import { extendTheme } from "native-base";

export const TEMAS = extendTheme({
    colors: {
        degradeAzulClaro: {
            50 : "#11999E",
            500: "#6DECB9"
        },
        degradeAzulForte: {
           50 : "#0C7CBA " 
        },
        degradeVerde: {
            50 : "#6C8800"
        },
        degradeVermelho: {
            50 : "#C92D39"
        },
        degradeMarron: {
            50 : "#975713"
        },
        branco: '#fff',
        preto: '#000'
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 20,
        xl: 24
    }
})
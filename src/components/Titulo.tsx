import {Text, ITextProps} from 'native-base'
import React, { ReactNode } from 'react'

interface TituloProps extends ITextProps{
    children: ReactNode
}

export function Titulo( {children, ...rest}: TituloProps){
    return(
        
      <Text 
        fontSize="2xl"
        fontWeight="bold"
        color="white"
        textAlign="center"
        mt={5}
        {...rest}
      >
      {children}
    </Text>
    )
}

// o proposito desse codigo é criar um componente onde a formatação de titulos das telas
// sejam iguais e não precise reescrever tudo novamente 
//basta importar e a cor, o tamnho e o formato da fonte sera iguais em todos 
// usanmdo o reuso do codigo 

//riar componentes em uma aplicação React Native traz diversas vantagens, como melhor legibilidade, 
//modularidade e manutenção. Ao dividir a aplicação em componentes menores e reutilizáveis, 
//a estrutura torna-se mais organizada e fácil de entender. Por isso, esse processo é tão necessário
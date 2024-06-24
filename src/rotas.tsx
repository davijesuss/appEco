import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Onboarding from './Onboarding';
import Formulario from './Formulario';
import Resultados from './Resultados';

// Defina os tipos das rotas
export type RootStackParamList = {
  Onboarding: undefined;
  Formulario: undefined;
  Resultados: { pointsByCategory: { [key: string]: number } };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Onboarding">
                <Stack.Screen
                    name="Onboarding"
                    component={Onboarding}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Formulario"
                    component={Formulario}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Resultados"
                    component={Resultados}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

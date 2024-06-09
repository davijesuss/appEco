import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from './Onboarding';
import Formulario from './Formulario';


const Stack = createNativeStackNavigator();

export default function Rotas() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Onboarding"
          component={OnboardingStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Formulario"
          component={FormularioStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function OnboardingStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function FormularioStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Formulario"
        component={Formulario}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

import React  from "react";
import {NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'

const Tab = createNativeStackNavigator();

import Onboarding from "./Onboarding"
import Fromulario from "./Formulario"

export default function Rotas(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="Onboarding" component={Onboarding} options={{headerShown: false}}
                />
                <Tab.Screen
                    name="Fromulario" component={Fromulario} options={{headerShown: false}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
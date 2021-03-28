import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const StackNavigation = createStackNavigator();

import Home from "./internalRouters";
import Register from "./pages/register/register";
import MainMenu from "./pages/mainMenu/mainMenu";

export default function Routers() {
    return (
        <NavigationContainer>
            <StackNavigation.Navigator screenOptions={{ headerShown: false }}>
                <StackNavigation.Screen name="MainMenu" component={MainMenu} />
                <StackNavigation.Screen name="Register" component={Register} />
                <StackNavigation.Screen name="Home" component={Home} />
            </StackNavigation.Navigator>
        </NavigationContainer>
    );
}

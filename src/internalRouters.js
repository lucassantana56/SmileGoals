import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

import Home from './pages/home/home'
import Register from "./pages/register/register";
import Challenge from "./pages/challenge/challenge";

export default function Routers() {
    return (
            <Drawer.Navigator screenOptions={{headerShown: true, color: '#FF5A00'}}>
                <Drawer.Screen
                    name="Home"
                    component={Home}
                    options={{
                        title: 'REALIZANDO SONHO',
                        headerStyle: {
                            backgroundColor: '#FF5A00',
                            height: 100
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                    }}/>
                <Drawer.Screen
                    name="Register"
                    component={Register}
                    options={{
                        title: 'Smiles',
                        headerStyle: {
                            backgroundColor: '#FF5A00',
                            height: 100
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                    }}/>
                <Drawer.Screen
                    name="Challenge"
                    component={Challenge}
                    options={{
                        title: 'DESAFIOS',
                        headerStyle: {
                            backgroundColor: '#FF5A00',
                            height: 100
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold'
                        },
                    }}/>
            </Drawer.Navigator>
    );
}

import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

import Home from './pages/home/home'

export default function Routers() {
    return (
            <Drawer.Navigator screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Home2" component={Home} />
            </Drawer.Navigator>
    );
}

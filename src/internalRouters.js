import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();

import Home from './pages/home/home'
import Interesse from './pages/interesse/interesse'

export default function Routers() {
    return (
            <Drawer.Navigator screenOptions={{headerShown: false}}>
                <Drawer.Screen name="Home" component={Home} />
                <Drawer.Screen name="Interesse" component={Interesse} />
            </Drawer.Navigator>
    );
}

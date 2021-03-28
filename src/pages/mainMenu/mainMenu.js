import React, { useState } from 'react'
import { Image, View, TouchableOpacity, Text, Linking, TextInput, ImageBackground } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import { parisImg } from '../../../assets/paris.jpg';

// import style from "../style";
import style from "./mainStyle";

export default function MainMenu() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmpass, setconfirmpass] = useState();


    function register() {
        navigation.navigate("Home")
    }

    return (

        <View style={style.container}>
            <Image source={{ uri: 'assets:/smiles-logo.png' }} style={{ width: 40, height: 40 }} />

            <Text h1 style={style.title}>
                Bem vindo de volta, Débora!
                </Text>

            <Text style={style.centerText}>
                Você tem 12.378 milhas
            </Text>


            <TouchableOpacity style={style.menuButton} onPress={() => register()}>
                <Text style={style.innerMenuButtonText}>Realize o seu sonho</Text>
                <Feather name="send" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.menuButton} onPress={() => register()}>
                <Text style={style.innerMenuButtonText}>Pesquise voos, hoteis, carros </Text>
                <Feather name="search" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.menuButton} onPress={() => register()}>
                <Text style={style.innerMenuButtonText}>Acumule e resgate milhas</Text>
                <Feather name="credit-card" size={20} color="#fff" />
            </TouchableOpacity>

            <TouchableOpacity style={style.menuButton} onPress={() => register()}>
                <Text style={style.innerMenuButtonText}>Dicas Smiles</Text>
                <Feather name="arrow-right" size={20} color="#fff" />
            </TouchableOpacity>

        </View>
    );
}

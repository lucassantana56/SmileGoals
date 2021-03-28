import React, { useState } from 'react'
import { Image, View, TouchableOpacity, Text, Linking, TextInput, ImageBackground } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons';
import logoSmile from '../../../assets/smiles-logo.png';

// import style from "../style";
import style from "./mainStyle";

export default function MainMenu() {
    const navigation = useNavigation();
    const [email, setEmail] = useState();
    const [contact, setContact] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmpass, setconfirmpass] = useState();

    const image = { uri: "https://static01.nyt.com/images/2020/07/17/business/00virus-cities1/merlin_174326094_28246b16-3fce-4102-8b19-5c6a3af29f75-articleLarge.jpg" };

    function register() {
        navigation.navigate("Register")
    }

    return (

        <View style={style.container}>
            <ImageBackground source={image} style={style.backgroundImage}>
                <View style={style.innerContainer}>
                    <Image source={logoSmile} style={style.image} />

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
            </ImageBackground>
        </View>
    );
}

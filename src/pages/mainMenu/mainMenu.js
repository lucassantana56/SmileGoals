import React, { useState } from 'react'
import { Image, View, TouchableOpacity, Text, Linking, TextInput, ImageBackground } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
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


            <Text h1 style={style.title}>
                Qual o seu destino?
                </Text>
            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Username" onChangeText={text => setUsername(text)}
                    value={username} />
            </View>
            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Email" onChangeText={text => setEmail(text)}
                    value={email} />
            </View>

            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password} />

            </View>

            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Confirm pass"
                    secureTextEntry={true}
                    onChangeText={text => setconfirmpass(text)}
                    value={confirmpass} />

            </View>

            <View style={style.inputView}>
                <TextInput
                    style={style.inputText}
                    placeholder="Contact"
                    placeholderTextColor=""
                    onChangeText={text => setContact(text)}
                    value={contact} />
            </View>

            <TouchableOpacity style={style.registerBtn}
                onPress={() => register()}>
                <Text>Register</Text>
            </TouchableOpacity>

        </View>
    );
}

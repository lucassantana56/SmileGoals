import React from 'react'
import { FlatList, Image } from 'react-native'
import { View, Text } from 'react-native'

import style from './challengeStyle'
import challenge from '../../../assets/challenge.png';

export default function Challenge() {

    const list = [
        { id: "1", description: "Indique 2 amigos para se cadastrar na Smiles" },
        { id: "2", description: "Indique 2 amigos para se cadastrar na Smiles" }]
    return (
        <View style={style.container}>
            <Text style={style.title}>Nessa semana</Text>
            <View style={style.challengesContainer}>
                <FlatList
                    style={style.challengeList}
                    data={list}
                    numColumns={2}
                    renderItem={({ item }) => {
                        return (
                            <View style={style.item}>
                                <Image source={challenge} style={style.image}></Image>
                                <Text style={style.description}>{item.description}</Text>
                            </View>
                        );
                    }}
                />

            </View>
        </View>
    )
}

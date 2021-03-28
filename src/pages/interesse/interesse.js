import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Icon } from 'react-native-element';
import style from "../style";
import cardTst from "../../assets/salvador.jpeg";

export default function Interesse() {
    return (
        <View style={style.container}>
            <Card>
                <Card.Title>HELLO WORLD</Card.Title>
                <Card.Divider/>
                <Card.Image source={cardTst}>
                    <Text style={{marginBottom: 10}}>
                        The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                        icon={<Icon name='code' color='#ffffff' />}
                        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                        title='VIEW NOW' />
                </Card.Image>
            </Card>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

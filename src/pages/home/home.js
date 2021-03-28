import React, { Component } from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity, Image, FlatList} from 'react-native';
import style from "../style";
import DatePicker from "react-native-datepicker";
import {Divider} from "react-native-elements";
const image = { uri: "https://static01.nyt.com/images/2020/07/17/business/00virus-cities1/merlin_174326094_28246b16-3fce-4102-8b19-5c6a3af29f75-articleLarge.jpg" };
import lock  from '../../../assets/lock.png';
import logoSmile from "../../../assets/smiles-logo.png";

export default function Home() {
  const listData = [
    {
      "id":1,
      "label":"Reservar hotel"
    },
    {
      "id":2,
      "label":"Comprar passagem"
    },
    {
      "id":3,
      "label":"Fazer seguro viagem"
    },
    {
      "id":4,
      "label":"Reservar hotel"
    },
    {
      "id":5,
      "label":"Comprar passeios"
    },
    {
      "id":6,
      "label":"Fazer seguro viagem"
    }
  ]

  return (
      <View style={style.containerMain}>
        <Text style={styles.homeTitleText}>THAILAND</Text>
        <Image
            source={image}
            style={styles.stretch}
        />
        <Text style={styles.homeSubtitleText}>Faltam 128 dias para sua viagem</Text>
        <Divider style={styles.separator}/>
        <Text style={styles.homeSubtitleText}>Cumpra suas metas e acumule milhas para ficar mais perto de viajar</Text>
        <FlatList
            data={listData}
            keyExtractor={data => String(data.id)}
            showsVerticalScrollIndicator={false}
            numColumns={3}
            renderItem={({item: data}) => (
                <View>
                  <Image source={lock} style={{width:150, height:150}} />
                  <Text>{data.label}</Text>
                </View>
            )}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  homeTitleText: {
    fontSize: 24,
    marginTop: 50,
    marginBottom:20,
    textAlign: 'center',
    color:'#FF5A00'
  },
  separator:{
    height: 1,
    width: '90%',
    backgroundColor: '#5a5a5a',
    alignSelf:'center',
    marginTop:15
  },
  homeSubtitleText: {
    fontSize: 20,
    marginTop: 20,
    fontWeight:'bold',
    textAlign: 'center',
    color:'#FF5A00'
  },
  stretch: {
    height: 200,
    resizeMode: 'stretch',
  },
});

import React, {useState} from 'react'
import {Image, View, TouchableOpacity, Text, Linking, TextInput, StyleSheet,ImageBackground} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native';
import DatePicker from 'react-native-datepicker';

import style from "../style";

export default function App(){
    const navigation = useNavigation();
    const [startDate, setStartDate] = useState('28-03-2021');
    const [date, setDate] = useState('28-03-2021');

    function register() {
        navigation.navigate("Home")
    }

    return (
        <View style={style.containerMain}>
            <Text style={style.titleText}>Qual o seu destino?</Text>
            <View style={styles.formFieldWrapper}>
                <Text style={styles.labelText}>De onde está saindo?</Text>
                <TextInput
                    placeholder="AAA"
                    style={styles.formFieldText}
                />
            </View>
            <View style={styles.formFieldWrapper}>
                <Text style={styles.labelText}>Para aonde quer ir?</Text>
                <TextInput
                    placeholder="AAA"
                    style={styles.formFieldText}
                />
            </View>
            <Text style={style.subtitleText}>Qual é a data da tua viagem?</Text>
            <View style={styles.formFieldWrapper}>
                <Text style={styles.labelText}>Quando vai ?</Text>
                <DatePicker
                    style={styles.datePickerStyle}
                    date={startDate} //initial date from state
                    mode="date" //The enum of date, datetime and time
                    placeholder="select date"
                    format="DD-MM-YYYY"
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    customStyles={{
                        dateIcon: {
                            //display: 'none',
                            position: 'absolute',
                            left: 0,
                            top: 4,
                            marginLeft: 0,
                        },
                        dateInput: {
                            marginLeft: 36,
                        },
                    }}
                    onDateChange={(date) => {
                        setStartDate(date);
                    }}
                />
            </View>
                <View style={styles.formFieldWrapper}>
                    <Text style={styles.labelText}>Quando volta ?</Text>
                    <DatePicker
                        style={styles.datePickerStyle}
                        date={date} //initial date from state
                        mode="date" //The enum of date, datetime and time
                        placeholder="select date"
                        format="DD-MM-YYYY"
                        confirmBtnText="Confirm"
                        cancelBtnText="Cancel"
                        customStyles={{
                            dateIcon: {
                                //display: 'none',
                                position: 'absolute',
                                left: 0,
                                top: 4,
                                marginLeft: 0,
                            },
                            dateInput: {
                                marginLeft: 36,
                            },
                        }}
                        onDateChange={(date) => {
                            setDate(date);
                        }}
                    />
                </View>
                <View style={styles.buttonSection}>
            <TouchableOpacity style={style.registerBtn}
                              onPress={() => register()}>
                <Text style={styles.labelText}>Continuar</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        margin: 20,
    },
    header: {
        fontSize: 20,
        paddingTop: 30
    },
    formText: {
        fontSize: 20,
        padding: 10,
        paddingLeft: 0
    },
    textSection: {
        width: '100%',
        height: '30%',
    },
    buttonSection: {
        marginTop:5,
        marginBottom: 5,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    formFieldWrapper: {
        marginTop:5,
        marginBottom: 5
    },
    formFieldText: {
        fontSize: 20,
        borderRadius: 8,
        borderColor:'#FF5A00',
        borderWidth: 1,
        padding: 12,
        marginLeft: 5,
        marginRight: 5
    },
    labelText: {
        fontSize: 20,
        marginBottom: 12,
        paddingLeft: 10,
        paddingTop: 5
    },
    datePickerStyle: {
        width: 200,
        marginTop: 20,
    }
})

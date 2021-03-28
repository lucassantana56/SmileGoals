import { StyleSheet } from 'react-native'
import Constants from "expo-constants/src/Constants";

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: '100%',
        paddingTop: 70,
        padding: 25
    },
    item: {
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: 100

    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#FF5A00'

    },
    challengesContainer: {
        margin: 20,

    },
    challengeList: {
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
    },
    item: {
        padding: 10,
        width: '30%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center'
    },
    image: {
        display: 'flex',
        paddingRight: 20,

    },
    description: {
        display: 'flex',
        flexWrap: 'wrap',
    }

})

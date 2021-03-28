import { StyleSheet } from 'react-native'
import Constants from "expo-constants/src/Constants";

export default StyleSheet.create({
    inputView: {
        width: "80%",
        backgroundColor: "#465881",
        borderRadius: 5,
        height: 50,
        margin: 5,
        justifyContent: "center",
        padding: 20
    },
    defaultView: {
        width: "90%",
        backgroundColor: "#c6cdcc",
        borderRadius: 5,
        height: 50,
        marginTop: 15
    },
    inputText: {
        height: 50,
        color: "white"
    },
    loginBtn: {
        width: "80%",
        backgroundColor: "#6bfb00",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5,
        marginBottom: 10
    },

    image: {
        marginTop: 5,
        marginBottom: 50
    },
    backgroundImage: {
            flex: 1,
            resizeMode: "cover",
            justifyContent: "center"
        },
    registerBtn: {
        width: 400,
        backgroundColor: "#FF5A00",
        borderRadius: 2,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20
    },
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerMain:{
        flex: 1
    },
    backBtn: {
        width: "80%",
        backgroundColor: "#fb0200",
        borderRadius: 5,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 5
    },
    restaurantList: {
        marginTop: 40,
    },
    restaurant: {
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 7,
    },
    restaurantProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    restaurantValue: {
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },
    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText: {
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
    baseText: {
        fontWeight: "normal"
    },
    titleText: {
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 100,
        marginBottom:20,
        textAlign: 'center'
    },
    subtitleText: {
        fontSize: 24,
        marginBottom:20,
        fontWeight: "bold",
        marginTop: 40,
        textAlign: 'center'
    }
})

import { StyleSheet } from 'react-native'
import Constants from "expo-constants/src/Constants";

export default StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    innerContainer: {
        paddingTop: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 30,
        marginLeft: 40,
        color: '#fff'
    },
    centerText: {
        display: 'flex',
        justifyContent: 'center',
        margin: 30,
        color: '#fff'
    },
    inputView: {
        width: "80%",
        backgroundColor: "transparent",
        borderRadius: 5,
        height: 50,
        margin: 5,
        justifyContent: "center",
        padding: 20,
        borderColor: "#FF5A00",
        borderWidth: 1
    },
    menuButton: {
        width: "95%",
        backgroundColor: "rgba(255, 90, 0, 0.3)",
        borderRadius: 8,
        height: 64,
        alignItems: "flex-start",
        justifyContent: "center",
        marginTop: 5,
        padding: 8,
        borderWidth: 1,
        borderColor: '#FF5A00',
        borderStyle: 'solid',
        display: 'flex',
        flexDirection: 'row'
    },
    innerMenuButtonText: {
        color: '#fff'
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
    }
});

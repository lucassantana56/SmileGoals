import { StyleSheet } from 'react-native'
import Constants from "expo-constants/src/Constants";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        margin: 20,
        marginLeft: 40,
        color: '#fff'
    },
    centerText: {
        display: 'flex',
        justifyContent: 'center',
        margin: 20
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    innerMenuButtonText: {
        color: '#fff'
    }
});
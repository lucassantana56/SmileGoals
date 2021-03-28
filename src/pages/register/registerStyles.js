import { StyleSheet } from 'react-native'
import Constants from "expo-constants/src/Constants";

export default StyleSheet.create({
    container: {
        width: "80%",
        backgroundColor: "transparent",
        backgroundImage: "",
        borderRadius: 5,
        height: 50,
        margin: 5,
        justifyContent: "center",
        padding: 20,
        borderColor: "#FF5A00",
        borderWidth: 1
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        flex: 1
    }
});
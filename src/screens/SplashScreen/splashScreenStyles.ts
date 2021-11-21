import { StyleSheet } from "react-native";

export const splashScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#050929',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }, 
    title: {
        fontSize: 64,
        color: '#ffffff',
        fontFamily: 'worksans_semibold',
        textAlign: 'center'
    }
})
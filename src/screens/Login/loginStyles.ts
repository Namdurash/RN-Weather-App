import { StyleSheet } from "react-native"

export const loginStyles = StyleSheet.create({
    icon: {
        paddingTop: 5,
        paddingStart: 5,
        color: '#191C39',
        fontSize: 35
    },
    form: {
        height: '60%',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonBlock: {
        height: '40%',
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    button: {
        backgroundColor: '#7B61FF',
        borderRadius: 50,
        marginBottom: 70,
        height: 40
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 20,
        paddingTop: 6
    },
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#191C39',
        flex: 1
    },
    formInput: {
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#8B8EA5',
        borderRadius: 50,
        width: '80%',
        fontSize: 16
    },
    errorFormInput: {
        borderColor: '#d62b2b',
        borderWidth: 2,
        flexDirection: 'row',
        marginVertical: 10,
        backgroundColor: '#8B8EA5',
        borderRadius: 50,
        width: '80%',
        fontSize: 16
    },
    input: {
        fontSize: 17
    },
    loader: {
        position: 'absolute',
        top: '65%',
        right: '43%'
    }
})
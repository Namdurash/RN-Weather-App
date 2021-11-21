import { StyleSheet } from "react-native"

export const settingsStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#050929'
    },
    iconBack: {
        marginVertical: 10,
        marginHorizontal: 20,
    },
    inputsBlock: {
        borderBottomWidth: 2,
        borderBottomColor: '#191C39',
        paddingBottom: 30
    },
    textInput: {
        borderBottomColor: '#ffffff',
        borderBottomWidth: 2,
        fontSize: 20,
        marginHorizontal: 30,
        fontFamily: 'worksans_regular'
    },
    optionsBlock: {
        flexDirection: 'column',
    },
    sliderBlockOption: {
        flexDirection: 'column',
        marginBottom: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#191C39',
        paddingVertical: 20,
        alignItems: 'center'
    },
    option: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '84%'
    },
    sliderBlock: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 5
    },
    slider: {
        width: '92%'
    },
    degreesBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 30,
        borderBottomWidth: 2,
        borderBottomColor: '#191C39',
        paddingVertical: 20,
    },
    button: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }
})
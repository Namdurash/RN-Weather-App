import { StyleSheet } from "react-native"

export const citySelectionStyles = StyleSheet.create({
    container: {
        backgroundColor: '#050929'
    },
    arrow: {
        marginTop: 10,
        marginStart: 20
    },
    searchBlock: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        position: 'relative'
    },
    searchField: {
        borderBottomWidth: 2,
        borderBottomColor: '#ffffff',
        width: '80%',
        fontSize: 20
    },
    searchIcon: {
        position: 'absolute',
        top: 5,
        right: 45
    },
    cityList: {
        flexDirection: 'column',
    }
})
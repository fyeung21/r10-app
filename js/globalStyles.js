import { StyleSheet } from 'react-native';

const globalStyles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10
    },
    body: {
        fontFamily: "Montserrat-Light",
        fontSize: 20,
        marginVertical: 10,
        marginBottom: 40,
        lineHeight: 28
    },
    btn: {
        color: "#fff",
        backgroundColor: "#9963ea",
        borderRadius: 40,
        paddingVertical: 18,
        width: "80%",
        marginHorizontal: 40,
        marginVertical: 30
    },
    btnText: {
        color: "#fff",
        fontSize: 18,
        fontFamily: "Montserrat-Regular",
        textAlign: "center"
    }

});

export default globalStyles;
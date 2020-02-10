import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    sessionCont: {
        marginHorizontal: 20,
        marginVertical: 20
    },
    imageThumbnail: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    presentBy: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderColor: "lightgrey"
    },
    greyHeading: {
        color: "grey",
        fontSize: 20,
        fontFamily: "Montserrat-Regular"
    },
    title: {
        fontSize: 30,
        fontFamily: "Montserrat-Regular",
        marginVertical: 15,
    },
    startTime: {
        color: "red",
        fontSize: 20,
        fontFamily: "Montserrat-Regular",
        marginVertical: 10,
    },
    speaker: {
        fontSize: 24,
        fontFamily: "Montserrat-Regular",
        marginHorizontal: 20,
    },
    modalCont: {
        backgroundColor: '#000',
        paddingVertical: 30
    },
    modalHeader: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        color: "#fff",
        fontSize: 24,
        fontFamily: "Montserrat-Regular",
        marginHorizontal: 8,
        marginVertical: 10,
    },
    modalTitle: {
        color: "#fff",
        fontSize: 22,
        fontFamily: "Montserrat-Regular",
        marginHorizontal: 70
    }
});

export default styles
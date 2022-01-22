import React from "react";
import { StyleSheet, ButtonProps, TouchableOpacity, Text } from "react-native";


export const CustomButton = ({ title, onPress }: ButtonProps) => {
    return (<TouchableOpacity style={styles.container} onPress={onPress} >
        <Text style={styles.title} >{title}</Text>
    </TouchableOpacity>)
};

const styles = StyleSheet.create({
    container: {
        width: 344,
        height: 42,
        backgroundColor: "#1FC4DB",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 20
    },
    title: {
        fontWeight: "500",
        fontSize: 16,
        lineHeight: 24,
        color: "#FFFFFF",
    }
})
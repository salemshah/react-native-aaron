import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, useWindowDimensions} from "react-native";
import colors from "../config/colors";

const AppButton = ({title, outline}) => {
    const {height} = useWindowDimensions()
    return (
        <TouchableOpacity
            style={[styles.container, outline && styles.outline, {paddingVertical: height / 55}]}>
            <Text style={[styles.title, outline && styles.outlineText]}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.secondary,
        borderRadius: 100,
        minWidth: "70%",
        paddingVertical: 16,
    },
    outline: {
        borderWidth: 2,
        borderColor: colors.secondary,
        backgroundColor: colors.white
    },
    title: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 18,
        textAlign: 'center'
    },
    outlineText: {
        color: colors.secondary
    }
})

export default AppButton;
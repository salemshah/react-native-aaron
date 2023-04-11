import React from 'react';
import {Platform, StyleSheet, useWindowDimensions, View, TouchableOpacity, Text} from "react-native";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import colors from "../config/colors";

const ButtonBox = ({icon, text, onPress}) => {
    const {width} = useWindowDimensions()
    const boxWidth = width / 3.5;
    const boxHeight = width / 3.5;
    if (Platform.OS === "android") {
        return (
            <TouchableOpacity onPress={() => onPress && onPress()} style={styles.boxContainerAndroid}>
                <View style={[styles.box, {width: boxWidth, height: boxHeight}]}>
                    <Text style={styles.text}>{text}</Text>
                    <MaterialIcons name={icon} size={55} color={colors.primary}/>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity onPress={() => onPress && onPress()} style={styles.boxContainerIOS}>
            <View style={[styles.box, {width: boxWidth, height: boxHeight, borderRadius: 13}]}>
                <Text style={styles.text}>{text}</Text>
                <MaterialIcons name={icon} size={55} color={colors.primary}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    boxContainerIOS: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: colors.white,
        borderRadius: 13,
    },
    boxContainerAndroid: {
        elevation: 10,
        borderRadius: 13,
        overflow: 'hidden'
    },
    text: {
        fontWeight: "bold",
        textAlign: "center"
    },
    box: {
        backgroundColor: colors.white,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
    }
});
export default ButtonBox;
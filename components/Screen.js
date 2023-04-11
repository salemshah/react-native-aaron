import React from 'react';
import {View, StyleSheet, Text} from "react-native";
import {StatusBar} from "expo-status-bar";
import colors from "../config/colors";
import Logo from "./Logo";

const Screen = ({children, showHeader = true, title}) => {
    return (
        <View style={styles.container}>
            <StatusBar/>
            {showHeader && <Header title={title}/>}
            <View style={styles.screen}>
                {children}
            </View>
        </View>
    );
};

export default Screen;

const Header = ({title}) => {

    return (
        <View style={styles.SVGContainer}>
            <Logo title={title}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    screen: {
        flex: 1,
        width: "100%"
    },
    SVGContainer: {
        height: 130,
        width: "100%",
        justifyContent: "center",
        alignItems: "center"
    }
})

import React, {useState} from 'react';
import {View, StyleSheet, Dimensions, Image} from "react-native";
import {StatusBar} from "expo-status-bar";
import {Svg, Ellipse} from 'react-native-svg';
import colors from "../config/colors";

const Screen = ({children, showHeader = true}) => {
    return (
        <View style={styles.container}>
            <StatusBar/>
            {showHeader && <Header/>}
            <View style={styles.screen}>
                {children}
            </View>
        </View>
    );
};

export default Screen;


const Header = () => {
    const screenWidth = Dimensions.get('window').width;
    const originalRadiusX = screenWidth / 2;
    const originalRadiusY = 100;
    const increasedRadiusX = originalRadiusX * 1.8;
    return (
        <View
            style={styles.SVGContainer}>
            <Svg
                height="160"
                width={screenWidth}
                viewBox={`0 0 ${screenWidth} 200`}
                style={{position: "absolute", top: 0}}
            >
                <Ellipse
                    cx={screenWidth / 2}
                    cy="50"
                    rx={increasedRadiusX}
                    ry={originalRadiusY}
                    fill={colors.primary}
                />
            </Svg>
            <Image style={{marginBottom: 10}} resizeMode="contain" source={require('../assets/logo.png')}/>
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

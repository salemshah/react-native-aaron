import React from 'react'
import {AppRegistry, StyleSheet, Text, View, Image, useWindowDimensions} from 'react-native'
import Swiper from 'react-native-swiper'
import colors from "../config/colors";
import Screen from "../components/Screen";
import IconList from "../components/IconList";
import AppButton from "../components/AppButton";

const Ticket = () => {
    const {height, width} = useWindowDimensions()
    return (
        <Screen>
            <Swiper
                loop={false}
                style={styles.wrapper}
                paginationStyle={[styles.paginationStyle, {height: height / 10}]}
                autoplay={false}
                activeDot={<Dot bgColor={colors.secondary}/>}
                dot={<Dot bgColor={colors.primary}/>}
            >
                <View style={[styles.slide, {marginTop: height / 13}]}>
                    <Text style={styles.topTitle}>Ticket ajouté</Text>
                    <Image style={{width: width / 2, height: width / 2}} resizeMode="contain"
                           source={require('../assets/cup-logo.png')}/>
                    <View style={styles.box}>
                        <Text style={styles.bottomTitle}>Impact: +8,6 kg de CO2</Text>
                        <IconList icon="car">
                            Soit l'équivalent de
                            <Text style={{fontWeight: "bold", fontSize: 19}}> 39 km </Text>
                            en voiture
                        </IconList>
                    </View>
                    <View style={[styles.box, {gap: 10}]}>
                        <AppButton title="Voir mon tableau de bord"/>
                        <AppButton title="Voir le détail" outline/>
                    </View>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Page 2</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Page 3</Text>
                </View>
                <View style={styles.slide}>
                    <Text style={styles.text}>Page 4</Text>
                </View>
            </Swiper>
        </Screen>
    )
}

export default Ticket

const Dot = ({bgColor}) => {
    return (
        <View style={[styles.dot, {backgroundColor: bgColor,}]}/>
    )
}


const styles = StyleSheet.create({
    slide: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    topTitle: {
        fontSize: 35,
        fontWeight: "900",
        color: colors.textLight
    },
    bottomTitle: {
        fontSize: 28,
        fontWeight: "900",
        color: colors.textLight
    },
    paginationStyle: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0
    },
    text: {
        fontSize: 32,
        fontWeight: "bold"
    },
    box: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    dot: {
        width: 13,
        height: 8,
        borderRadius: 4,
        marginLeft: 10,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3,
    }
})

AppRegistry.registerComponent('aaron-test', () => Ticket)
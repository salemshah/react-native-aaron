import React, {useEffect} from 'react';
import {View, Text, useWindowDimensions, StyleSheet, Alert} from "react-native";
import Screen from "../components/Screen";
import colors from "../config/colors";
import ButtonBox from "../components/ButtonBox";
import * as ImagePicker from "expo-image-picker";
import QRCode from "../components/QRCode";

const EmpreinteScreen = () => {
    const {width} = useWindowDimensions()

    useEffect(() => {
        (async function () {
            const {granted} = await ImagePicker.requestCameraPermissionsAsync()
            if (!granted) alert("Vous devez activer l'autorisation d'accès sur votre photo !")
        }())
    }, []);

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.5
            })
            if (!result.canceled) {
                Alert.alert(`Vous avez sélectionné => ${result?.assets[0]?.fileName}`)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (<Screen>
        <View style={styles.container}>
            <Text style={{
                maxWidth: width / 1.4,
                textAlign: "center",
                fontSize: 18,
                fontWeight: "600",
                color: colors.textLight
            }}>
                Présentez votre QR code à la caisse pour ajouter votre ticket.</Text>
            <View style={[styles.QRCode, {width: width / 1.4, height: width / 1.4}]}>
                <QRCode value="salemshah.com"/>
            </View>
            <View>
                <Text style={{fontWeight: "bold", fontSize: 20, color: colors.textLight}}>OU</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <ButtonBox onPress={selectImage} icon="add-a-photo" text="Prendre en photo"/>
                <ButtonBox icon="arrow-circle-down" text="Importer"/>
            </View>
        </View>
    </Screen>);
};


const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: "space-around", paddingBottom: 15,
    }, QRCode: {
        backgroundColor: colors.primaryLight, borderRadius: 20
    }, buttonsContainer: {
        display: "flex", flexDirection: "row", paddingHorizontal: 10, justifyContent: "space-between", width: "75%"
    },
});

export default EmpreinteScreen;
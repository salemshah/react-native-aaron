import React from 'react';
import {Text, View, StyleSheet} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";

const IconList = ({icon, children}) => {
    return (
        <View style={styles.container}>
            <Fontisto name={icon} size={35}/>
            <Text style={{fontSize: 18}}>
                {children}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        gap: 5
    }
})

export default IconList;
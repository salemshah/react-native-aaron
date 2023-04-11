import React from 'react';
import {Ellipse, Svg} from "react-native-svg";
import colors from "../config/colors";
import {Dimensions, Image, Text} from "react-native";

const Logo = ({title}) => {
    const screenWidth = Dimensions.get('window').width;
    const originalRadiusX = screenWidth / 2;
    const originalRadiusY = 100;
    const increasedRadiusX = originalRadiusX * 1.8;
    return (
        <>
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
            {title && <Text style={{fontWeight: "bold", fontSize: 32, color: colors.white}}>{title}</Text>}
            {!title && <Image style={{marginBottom: 10}} resizeMode="contain" source={require('../assets/logo.png')}/>}
        </>
    );
};

export default Logo;
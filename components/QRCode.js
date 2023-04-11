import {View, StyleSheet} from 'react-native';
import SvgQRCode from 'react-native-qrcode-svg';

export default function QRCode({value}) {
    return (
        <View style={styles.container}>
            <SvgQRCode value={value}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
});

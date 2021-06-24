import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        width: '100%',
        paddingHorizontal: 24,
        flexDirection: 'row',
        justifyContent: 'space-between', //cada elemento ocupe as extremidades, colando nos limites do espaço
        marginTop: getStatusBarHeight() +  26, //aplica o espaçamento, pegando o tamanho da barra superior mais 26 (não funciona no android, pois no android não conta a barra superior)
        marginBottom: 42
    }
});
import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 56,
        backgroundColor: theme.colors.primary,
        borderRadius: 8,
        flexDirection: 'row', //um elemento do lado do outro
        alignItems: 'center'
    },

    title: {
        flex: 1, //estica o bottão
        color: theme.colors.heading,
        fontSize: 15,
        textAlign: 'center'
    },

    iconWrapper:{
        width: 56,
        height: 56,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1, //Adiciona a linha
        borderColor: theme.colors.line    
    },

    icon: {
        width: 24,
        height: 18
    }
});

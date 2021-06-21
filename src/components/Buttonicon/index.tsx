
import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity, //Elemento de click
    TouchableOpacityProps
} from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles';

//interface Props{}
//Propriedades recebe todas as propriedades de TouchableOpacity e mais as propriedades definidas depois do colchetes
type Props = TouchableOpacityProps & {
    //title?: string; //propriedade opcional
    title: string;

}
export function ButtonIcon({title, activeOpacity}: Props) {
    return (
        <TouchableOpacity 
        style={styles.container}
        activeOpacity={activeOpacity}
        >
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}
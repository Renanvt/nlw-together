
import React from 'react';
import {
    Text,
    Image,
    View,
    TouchableOpacity //Elemento de click
} from 'react-native';

import DiscordImg from '../../assets/discord.png'
import { styles } from './styles';

//interface Props{}
type Props = {
    //title?: string; //propriedade opcional
    title: string;

}
export function ButtonIcon({title}: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} style={styles.icon} />
            </View>

            <Text style={styles.title}>
                { title }
            </Text>
        </TouchableOpacity>
    );
}
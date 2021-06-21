import React, { useState } from 'react';
import {
    View,
    Text,
    Image
} from 'react-native';

import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
export function SignIn() {
    //[ nome_stado, funcao_atualizar_estado]
    //useState('valor_inicial')
    const [text, setText] = useState('Rodrigo');

    return (
        //Conceito de propriedade
        <View style={styles.container}>
            <Image source={IllustrationImg} />
        </View>
    );
}
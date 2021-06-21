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
        //View é um elemento para criar grupos de componentes, para movimenta-los, organiza-los na interface
        <View style={styles.container}>
            <Image source={IllustrationImg}
                style={styles.image} />

            <View style={styles.content}>
                <Text style={styles.tittle}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente
                    
                </Text>

                <Text>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>
            </View>
        </View>
    );
}
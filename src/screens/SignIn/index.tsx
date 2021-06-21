import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import { styles } from './styles'
export function SignIn() {
    //[ nome_stado, funcao_atualizar_estado]
    //useState('valor_inicial')
    const [text, setText] = useState('Rodrigo');

    return (
        //Conceito de propriedade
        <View style={styles.container}>
            <Text>
                Hello World, NLW Together
            </Text>
            <TextInput
                style={styles.input}
                onChangeText={setText}
                //onChangeText={(value) => console.log(value)} //Observa o textinput e toda vez que um valor muda, mostra oque mudou
            />
            <Text>
                Você digitou: ... {text}
            </Text>
        </View >
    );
}
import React from 'react';
import {
    View,
    Text,
    Image,
    StatusBar
} from 'react-native';

import { ButtonIcon } from '../../components/Buttonicon';
import IllustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
export function SignIn() {
    //[ nome_stado, funcao_atualizar_estado]
    //useState('valor_inicial')


    return (
        //View é um elemento para criar grupos de componentes, para movimenta-los, organiza-los na interface
        <View style={styles.container}>
            <StatusBar
                //Personaliza a barra de status
                barStyle="light-content" //Deixa a barra de status como branca
                backgroundColor="transparent"
                translucent //conteúdo cola no limite da tela
            />
            <Image source={IllustrationImg}
                style={styles.image}
                resizeMode="stretch" //Garanti a imagem ajustada ao tamanho definido
            />

            <View style={styles.content}>
                <Text style={styles.title}>
                    Organize {`\n`}
                    suas jogatinas {`\n`}
                    facilmente

                </Text>

                <Text style={styles.subtitle}>
                    Crie grupos para jogar seus games {`\n`}
                    favoritos com seus amigos
                </Text>

                <ButtonIcon
                    title="Entrar com Discord" 
                    activeOpacity={0.7}/>
            </View>
        </View>
    );
}
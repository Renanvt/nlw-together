
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { Category } from '../Category';
export { Category } from '../Category';

export function CategorySelect({categorySelected} : Props) {

type Props={
    categorySelected: string;
}
    return (
        <ScrollView
            horizontal
            style={styles.container}
            showsVerticalScrollIndicator={false}//não apareçe barra de rolagem
            contentContainerStyle={{ paddingRight: 40 }} //Quando terminar a listagem, ainda ter um espaçamento da borda, batendo com espaçamento do botão 
        >
            {
                //CATEGORIAS
                categories.map(category => {
                    <Category
                        key={category.id}
                        title={category.title}
                        icon={category.icon}
                        checked={category.id === categorySelected}
                    />
                })
            }
        </ScrollView>

    );
}
import React, {useState} from 'react';
import {View} from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/Profile/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
export function Home() {
    const [category, setCategory] = useState('');
    function handleCategorySelect(categoryId: string){
        //efeito de marca e desmarca, se clickar em um elemento marcado, automaticamente, deselecionar todos
        categoryId === category ? setCategory('') : setCategory(categoryId);
        //Se o id atual não é oque estou clickando, então atribua a esse novo id. é o mesmo que fazer:
        /*i
        f(categoryId == category){
            setCategory('')
        }else{
            setCategory(categoryId)
        }
        */
    }
    return (
        <View>
            <View style={styles.header}>
               <View>
                    <CategorySelect
                        categorySelected={category}
                        setCategory={handleCategorySelect}
                    />
               </View>
            </View>
        </View>
    );
}
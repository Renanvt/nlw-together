import React from 'react';
import {View} from 'react-native';
import { styles } from './styles';
import { Profile } from '../../components/Profile';
import { ButtonAdd } from '../../components/Profile/ButtonAdd';
import { CategorySelect } from '../../components/CategorySelect';
export function Home() {
    return (
        <View>
            <View style={styles.header}>
               <View>
                    <CategorySelect/>
               </View>
            </View>
        </View>
    );
}
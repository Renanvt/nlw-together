import React, {ReactNode} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from './styles'
import { theme } from '../../global/styles/theme';

type Props = {
    children: ReactNode;
}
export function Background({ children }: Props) {
    const { secondary80, secondary100 } = theme.colors;

    return (
        <LinearGradient
            style={styles.container}
            colors={[secondary80, secondary100]}
        >
            {children}
        </LinearGradient >
    )
    //Passa para o efeito de gradiente uma interface filha que vai ser embrulhada pelo efeito de gradiente, aproveitando o gradiente em toda a interface
}
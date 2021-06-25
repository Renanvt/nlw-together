
import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { View, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { styles } from './styles';
import { categories } from '../../utils/categories';
import { theme } from '../../global/styles/theme';


type Props = RectButtonProps & {
    title: string;
    icon: React.FC<SvgProps>;
    checked?: boolean;
}
export function Category({
    title,
    icon: Icon, //usa como componente
    checked = false,
    ...rest
}: Props) {
    const { secondary50, secondary70 } = theme.colors;

    return (
        <RectButton {...rest}>
            <LinearGradient
                style={styles.container}
                colors={[secondary50, secondary70]}
            >
                <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
                    <View style={
                        checked ? styles.checked : styles.check
                    } />
                    <Icon
                        width={48}
                        height={48}
                    />
                    <Text style={styles.title}>
                        {title}
                    </Text>
                </View>
            </LinearGradient>
        </RectButton>
    );
    //pacity: checked ? 1 : 0.4 -> Se o botão estiver marcado, tem opacidade de 1, se não tem opacidade de 0.4
}
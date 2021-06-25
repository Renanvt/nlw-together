import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';

const {Navigator, Screen} = createStackNavigator();

export function AuthRoutes = (){
    return(
        <Navigator
            headerMode="none"
            screenOption={{
                cardStyle: {
                    backgroundColor: 'transparent'
                }
            }}
        >
            <Screen
                name="SignIn"
                componente={SignIn}
            />
            <Screen
                name="Home"
                componente={Home}
            />
        </Navigator>
    )
}

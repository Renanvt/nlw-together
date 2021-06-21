import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles'
export function SignIn() {
  return (
      //Conceito de propriedade
    <View style={{ flex:1, backgroundColor: 'red', alignItems: 'center', justifyContent: 'center'}}>
      <Text>
        Hello World, NLW Together
      </Text>
    </View>
  );
}
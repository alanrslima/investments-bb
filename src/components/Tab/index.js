import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

export default function Tab() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text>Nome</Text>
        <Text>Investimento</Text>
      </View>
    </View>
  );
}

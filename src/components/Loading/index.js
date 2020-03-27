import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

export default function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.BLUE} size="large" />
    </View>
  );
}

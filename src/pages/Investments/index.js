import React from 'react';
import { View, FlatList } from 'react-native';
import styles from './styles';
import Investment from '../../components/Investment';
import TitleBox from '../../components/TitleBox';

export default function Investments() {
  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <TitleBox
            title="INVESTIMENTOS"
            subTitle="R$"
          />
        )}
        data={[1, 2, 3, 4]}
        keyExtractor={(investment) => `${investment}`}
        renderItem={({ item }) => (
          <Investment
            title="Investimento"
            description="Minha aposentadoria"
            value="75.100,00"
          />
        )}
      />
    </View>
  );
}

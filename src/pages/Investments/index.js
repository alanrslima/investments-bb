import React, { useState, useEffect } from 'react';
import { View, FlatList } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import Investment from '../../components/Investment';
import TitleBox from '../../components/TitleBox';
import api from '../../services/api';
import Loading from '../../components/Loading';
import AlertBox from '../../components/AlertBox';


export default function Investments() {
  const [investments, setInvestments] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    handleInvestments();
  }, []);

  async function handleInvestments() {
    try {
      setLoading(true);
      const res = await api.get('v2/5e76797e2f0000f057986099');
      const data = res.data.response.data.listaInvestimentos.map((investment) => ({
        ...investment,
        formatedValue: Intl.NumberFormat('pt-BR', {
          style: 'currency', currency: 'BRL'
        }).format(investment.saldoTotalDisponivel)
      }));
      setInvestments(data);
      setLoading(false);
      setError('');
    } catch (err) {
      setError('Houve um problema ao buscar a lista de investimentos...');
      setLoading(false);
    }
  }

  function renderContent() {
    if (error.length) {
      return <AlertBox message={error} />;
    }
    if (loading) {
      return <Loading />;
    }
    return (
      <Animatable.View
        animation="fadeInUp"
        iterationCount={1}
        style={{ flex: 1 }}
      >
        <FlatList
          ListHeaderComponent={() => (
            <TitleBox
              title="INVESTIMENTOS"
              subTitle="R$"
            />
          )}
          data={investments}
          keyExtractor={(_, i) => `${i}`}
          renderItem={({ item }) => (
            <Investment
              title={item.nome}
              onPress={() => { }}
              description={item.objetivo}
              value={item.formatedValue}
            />
          )}
        />
      </Animatable.View>
    );
  }

  return (
    <View style={styles.container}>
      {renderContent()}
    </View>
  );
}

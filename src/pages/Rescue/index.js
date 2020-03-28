import React, { useState, useEffect } from 'react';
import { ScrollView, KeyboardAvoidingView } from 'react-native';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import styles from './styles';
import TitleBox from '../../components/TitleBox';
import Tab from '../../components/Tab';
import ModalRescue from '../../components/ModalRescue';
import Button from '../../components/Button';
import Form from '../../components/Form';

export default function Rescue({ route }) {
  const [showModal, setShowModal] = useState(false);
  const [total, setTotal] = useState(0);
  const [errorTotal, setErrorTotal] = useState('');
  const [actions, setActions] = useState([]);
  const investment = route.params;

  useEffect(() => {
    setActions(route.params.acoes);
  }, []);

  useEffect(() => {
    if (total > investment.saldoTotalDisponivel) {
      setErrorTotal(`Valor total não pode ser maior que ${investment.formatedValue}`);
    } else {
      setErrorTotal('');
    }
  }, [total]);

  function onChange(action) {
    const newStateActions = actions.map((item) => {
      if (item.id === action.id) {
        return action;
      }
      return item;
    });
    let totalValue = 0;
    for (let i = 0; i < newStateActions.length; i += 1) {
      totalValue += newStateActions[i].inputValue || 0;
    }
    setTotal(totalValue.toFixed(2));
    setActions(newStateActions);
  }

  function formatTotal() {
    return Intl.NumberFormat('pt-BR', {
      style: 'currency', currency: 'BRL'
    }).format(total);
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView style={styles.content}>
        <TitleBox
          title="DADOS DO INVESTIMENTO"
        />
        <Tab
          title="Nome"
          description={investment.nome}
        />
        <Tab
          title="Saldo total disponível"
          description={investment.formatedValue}
        />
        <TitleBox
          title="RESGATE DO SEU JEITO"
        />
        {investment.acoes.map((action) => (
          <Form
            onChange={onChange}
            action={action}
            key={action.id}
          />
        ))}
        <Tab
          containerStyle={{ marginBottom: 15 }}
          title="Valor total a resgatar"
          description={formatTotal()}
          error={errorTotal}
        />

      </ScrollView>
      <Button
        text="CONFIRMAR RESGATE"
        onPress={() => setShowModal(true)}
        containerStyle={{ paddingBottom: getBottomSpace() + 15 }}
      />
      <ModalRescue
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
      />
    </KeyboardAvoidingView>
  );
}

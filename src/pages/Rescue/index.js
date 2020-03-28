import React, { useState, useEffect } from 'react';
import {
  KeyboardAvoidingView, Platform, Alert, FlatList
} from 'react-native';
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
  let flatListRef = null;

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

  function doValidations() {
    // Realiza a validação de valores a recuperar em cada ação
    let invalidAction = null;
    for (let i = 0; i < actions.length; i += 1) {
      if ((actions[i].inputValue) && (actions[i].inputValue > actions[i].value)) {
        invalidAction = actions[i];
        break;
      }
    }
    if (invalidAction) {
      flatListRef.scrollToItem({ item: invalidAction });
      return false;
    }
    // Verifica se nenhum valor a resgatar foi preenchido
    // eslint-disable-next-line eqeqeq
    if (total == 0) {
      Alert.alert('Para confirmar o resgate, preeencha os valores que deseja resgatar.');
      return false;
    }
    // Verifica se o valor total disponível é compatível com o valor total a resgatar
    if (total > investment.saldoTotalDisponivel) {
      Alert.alert('Você não pode resgatar um valor superior ao saldo total disponível');
      return false;
    }
    return true;
  }

  function onPressConfirm() {
    const valid = doValidations();
    if (valid) {
      setShowModal(true);
    }
  }

  function renderHeader() {
    return (
      <>
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
      </>
    );
  }

  function renderFooter() {
    return (
      <Tab
        containerStyle={{ marginBottom: 15 }}
        title="Valor total a resgatar"
        description={formatTotal()}
        error={errorTotal}
      />
    );
  }

  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : ''} style={styles.container}>
      <FlatList
        ref={(ref) => { flatListRef = ref; }}
        ListHeaderComponent={renderHeader}
        ListFooterComponent={renderFooter}
        data={actions}
        renderItem={({ item: action }) => (
          <Form
            onChange={onChange}
            action={action}
            key={action.id}
          />
        )}
      />
      <Button
        text="CONFIRMAR RESGATE"
        onPress={onPressConfirm}
        containerStyle={{ paddingBottom: getBottomSpace() + 15 }}
      />
      <ModalRescue
        isVisible={showModal}
        onCancel={() => setShowModal(false)}
      />
    </KeyboardAvoidingView>
  );
}

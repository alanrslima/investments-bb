import React, { useState } from 'react';
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
  const investment = route.params;

  function onChange(action) {
    // let currentTotal = 0;
    // for (let i = 0; i < actions.length; i += 1) {
    //   if (actions[i].inputValue) {
    //     currentTotal += actions[i].inputValue;
    //   }
    // }
    // console.log(currentTotal);
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
            // onChange={onChange}
            action={action}
            // actions={investment.acoes}
            key={action.id}
          />
        ))}
        <Tab
          containerStyle={{ marginBottom: 15 }}
          title="Valor total a resgatar"
          description={`${total}`}
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

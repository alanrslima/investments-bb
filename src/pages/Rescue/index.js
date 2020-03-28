import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';

import styles from './styles';
import TitleBox from '../../components/TitleBox';
import Tab from '../../components/Tab';
import ModalRescue from '../../components/ModalRescue';

export default function Rescue() {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <TitleBox
          title="DADOS DO INVESTIMENTO"
        />
        <Tab
          title="Nome"
          description="INVESTIMENTO III"
        />
        <Tab />
      </ScrollView>
      <ModalRescue isVisible={showModal} />
    </View>
  );
}

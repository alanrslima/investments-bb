import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';

import styles from './styles';
import Button from '../Button';

export default function ModalRescue({ isVisible }) {
  return (
    <Modal
      backdropOpacity={0.3}
      isVisible={isVisible}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>RESGATE EFETUADO!</Text>
          <Text style={styles.description}>
            O valor solicitado estará em sua conta em até 5 dias úteis!
          </Text>
        </View>
        <Button
          text="NOVO RESGATE"
          onPress={() => { }}
        />
      </View>
    </Modal>
  );
}

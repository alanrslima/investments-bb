import React from 'react';
import { View, Text } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';

import styles from './styles';
import Button from '../Button';

function ModalRescue({ isVisible, onCancel }) {
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
          onPress={onCancel}
        />
      </View>
    </Modal>
  );
}

ModalRescue.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ModalRescue;

import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import * as Animatable from 'react-native-animatable';

import styles from './styles';

function AlertBox({ message }) {
  return (
    <Animatable.View
      animation="fadeInUp"
      iterationCount={1}
      style={styles.container}
    >
      <Text style={styles.alertText}>{message}</Text>
    </Animatable.View>
  );
}

AlertBox.propTypes = {
  message: PropTypes.string.isRequired,
};

export default AlertBox;

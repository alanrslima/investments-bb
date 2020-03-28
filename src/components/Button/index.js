import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Button({ text, onPress, containerStyle }) {
  return (
    <TouchableOpacity style={[styles.container, containerStyle]} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  containerStyle: PropTypes.objectOf(PropTypes.number)
};

Button.defaultProps = {
  containerStyle: {}
};

export default Button;

import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Investment({
  title, description, value, onPress, disabled
}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={disabled}
    >
      <View style={styles.containerInfo}>
        <Text style={[styles.title, disabled && styles.disabled]}>{title}</Text>
        <Text style={[styles.description, disabled && styles.disabled]}>{description}</Text>
      </View>
      <View style={styles.containerValue}>
        <Text
          numberOfLines={1}
          style={[styles.value, disabled && styles.disabled]}
        >
          {value}
        </Text>
      </View>
    </TouchableOpacity>
  );
}

Investment.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

Investment.defaultProps = {
  disabled: false,
};

export default Investment;

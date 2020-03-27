import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function Investment({ title, description, value }) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.containerInfo}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Text style={styles.value}>{value}</Text>
    </TouchableOpacity>
  );
}

Investment.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Investment;

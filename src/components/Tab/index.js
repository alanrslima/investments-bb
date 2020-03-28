import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Tab({ title, description, containerStyle }) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  containerStyle: PropTypes.objectOf(PropTypes.number),
};

Tab.defaultProps = {
  containerStyle: {},
};

export default Tab;

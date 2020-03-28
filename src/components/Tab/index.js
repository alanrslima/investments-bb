import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

function Tab({
  title, description, containerStyle, error
}) {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.content}>
        <View style={styles.contentInfo}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        {error ? <Text style={styles.textError}>{error}</Text> : null}
      </View>
    </View>
  );
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  containerStyle: PropTypes.objectOf(PropTypes.number),
  error: PropTypes.string,
};

Tab.defaultProps = {
  containerStyle: {},
  error: '',
};

export default Tab;

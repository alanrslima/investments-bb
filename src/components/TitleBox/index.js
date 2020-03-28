import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

function TitleBox({ title, subTitle }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.text}>{subTitle}</Text>
    </View>
  );
}

TitleBox.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

TitleBox.defaultProps = {
  subTitle: ''
};

export default TitleBox;

import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  text: {
    color: colors.GRAY_DARK,
    fontWeight: '600',
    fontSize: fonts.DESCRIPTION,
  }
});

import { StyleSheet } from 'react-native';
import { fonts, colors } from '../../styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
  },
  alertText: {
    textAlign: 'center',
    fontSize: fonts.DESCRIPTION,
    color: colors.GRAY_DARK,
  }
});

import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: colors.WHITE,
  },
  containerInput: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  titleInput: {
    fontSize: 13,
    color: colors.BLACK,
    marginBottom: 8,
  },
  input: {
    fontSize: fonts.TITLE,
    color: colors.BLACK,
    fontWeight: '600',
  },
  error: {
    color: colors.RED,
    fontSize: 12,
    marginTop: 5,
  }
});

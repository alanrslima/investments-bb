import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    padding: 20,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderBottomColor: colors.GRAY,
  },
  containerInfo: {
    flex: 1,
  },
  title: {
    color: colors.BLACK,
    fontWeight: '600',
    fontSize: fonts.TITLE,
  },
  description: {
    color: colors.GRAY_DARK,
    fontSize: fonts.DESCRIPTION,
    marginTop: 2,
  },
  value: {
    color: colors.BLACK,
    fontWeight: 'bold',
    fontSize: fonts.TITLE,
  }
});

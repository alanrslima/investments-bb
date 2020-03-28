import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  content: {
    marginLeft: 20,
    paddingVertical: 15,
    borderBottomColor: colors.GRAY,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: 20,
  },
  title: {
    color: colors.BLACK,
    fontWeight: '600',
    fontSize: fonts.TITLE,
  },
  description: {
    color: colors.GRAY_DARK,
    fontWeight: '600',
    fontSize: fonts.TITLE,
  }
});

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
    flex: 0.6,
  },
  containerValue: {
    flex: 0.4,
    alignItems: 'flex-end',
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
    fontWeight: '600',
    fontSize: fonts.DESCRIPTION,
  }
});

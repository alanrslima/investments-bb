import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingBottom: 50,
    marginTop: 30,
  },
  title: {
    fontSize: fonts.HEADLINE,
    color: colors.BLACK,
    fontWeight: '600'
  },
  description: {
    textAlign: 'center',
    marginTop: 10,
    color: colors.BLUE,
    fontSize: fonts.DESCRIPTION
  }
});

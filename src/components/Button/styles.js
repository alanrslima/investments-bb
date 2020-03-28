import { StyleSheet } from 'react-native';
import { colors, fonts } from '../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: colors.YELLOW,
  },
  text: {
    fontWeight: 'bold',
    color: colors.BLUE,
    fontSize: fonts.DESCRIPTION
  }
});

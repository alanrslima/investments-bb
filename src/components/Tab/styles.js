import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

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
  }
});

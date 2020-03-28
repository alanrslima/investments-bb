import { StyleSheet } from 'react-native';
import { colors } from '../../styles';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.YELLOW,
    height: 55,
  },
  text: {
    fontWeight: 'bold',
    color: colors.BLUE,
  }
});

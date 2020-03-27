import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native';
import AppContainer from './routes';
import colors from './styles/colors';


export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={colors.BLUE} />
      <AppContainer />
    </>
  );
}

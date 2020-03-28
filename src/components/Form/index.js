import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import Tab from '../Tab';
import styles from './styles';


export default function Form({ action }) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  let inputRef = null;

  useEffect(() => {
    if (inputRef) {
      const value = inputRef.getRawValue();
      if (value > action.value) {
        setError(`Valor não pode ser maior que ${action.formatedValue}`);
      } else {
        setError('');
      }
    }
  }, [input]);

  return (
    <View style={styles.container}>
      <Tab
        title="Ação"
        description={action.nome}
      />
      <Tab
        title="Saldo acumulado"
        description={action.formatedValue}
      />
      <View style={styles.containerInput}>
        <Text style={styles.titleInput}>Valor a resgatar</Text>
        <TextInputMask
          ref={(ref) => { inputRef = ref; }}
          value={input}
          type="money"
          style={styles.input}
          onChangeText={(text) => setInput(text)}
          placeholder="Digite o valor"
          placeholderTextColor="#CCC"
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </View>
  );
}

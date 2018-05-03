import React from 'react';
import { Text, View, TextInput } from 'react-native';

const Input = props => (
  <View style={styles.containerStyle}>
    <Text style={styles.labelStyle}>{props.label}</Text>
    <TextInput
      underlineColorAndroid='transparent'
      autoCorrect={false}
      placeholder={props.placeholder}
      style={styles.inputStyle}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
    />
  </View>
);

const styles = {
  inputStyle: {
    color: '#000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    height: 20,
    width: 100,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
      fontSize: 18,
      paddingLeft: 20,
      flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  }
};

export { Input };

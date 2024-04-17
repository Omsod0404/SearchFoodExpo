import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const SearchBar = ({value, onChangeText}) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="🔍 Search food..."
      style={styles.input}
      multiline={false}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#f0f0f0',
    width: '90%',
    alignSelf: 'center',
    height: 40,
    borderRadius: 20,
    paddingLeft: 20,
    paddingRight: 20,
    marginBottom: 20,
  },
});

export default SearchBar;
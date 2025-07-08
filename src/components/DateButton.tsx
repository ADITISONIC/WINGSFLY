import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface Props {
  date: string;
  selected: boolean;
  onPress: () => void;
}

const DateButton = ({ date, selected, onPress }: Props) => (
  <TouchableOpacity
    style={[styles.button, selected && styles.selected]}
    onPress={onPress}
  >
    <Text style={[styles.text, selected && styles.selectedText]}>{date}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  selected: {
    backgroundColor: '#1118C5',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  selectedText: {
    color: '#fff',
  },
});

export default DateButton;

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const QuoteCard = () => {
  return (
    <View>
      <Text style={styles.title}>Today’s Quote</Text>
      <Text style={styles.quote}>
        “You must do the things, you think you cannot do.”
      </Text>

      <Text style={styles.progressLabel}>Progress 65%</Text>
      <View style={styles.progressBar}>
        <View style={styles.progressFill}>
          <LinearGradient
            colors={['#1118C5', '#4D6EFF']}
            style={styles.blurCircle}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: 'center',
    marginBottom: 10,
  },
  quote: {
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  progressLabel: {
    color: '#1118C5',
    fontSize: 10,
    marginBottom: 6,
    fontWeight: '500',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#eee',
    borderRadius: 3,
    overflow: 'hidden',
    position: 'relative',
  },
  progressFill: {
    width: '65%',
    height: '100%',
    backgroundColor: '#1118C5',
    position: 'relative',
  },
  blurCircle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#1118C5',
    position: 'absolute',
    right: -9,
    top: -6,
    shadowColor: '#1118C5',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation: 8,
  },
});

export default QuoteCard;

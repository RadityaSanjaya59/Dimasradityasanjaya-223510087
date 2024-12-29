import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';

export default function MovieCard({ title, year, image, onPress }) {
  return (
    <Card style={styles.card}>
      <Card.Cover source={{ uri: image }} style={styles.image} />
      <Card.Content>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>Year: {year}</Text>
      </Card.Content>
      <Card.Actions>
        <Button onPress={onPress}>Details</Button>
      </Card.Actions>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  image: {
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#757575',
    marginBottom: 10,
  },
});

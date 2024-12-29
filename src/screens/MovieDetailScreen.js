import React from 'react';
import { View, StyleSheet, Image, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-paper';

export default function MovieDetailScreen({ route, navigation }) {
  const { movie } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: movie.image }} style={styles.image} />
      <Text style={styles.title}>{movie.title}</Text>
      <Text style={styles.subtitle}>Year: {movie.year}</Text>
      <Text style={styles.description}>{movie.description}</Text>
      <Button
        mode="contained"
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        Back to Movies
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#757575',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  button: {
    marginTop: 20,
    width: '80%',
  },
});

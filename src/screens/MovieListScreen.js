import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import MovieCard from '../components/MovieCard';

const movies = [
  {
    id: '1',
    title: 'Inception',
    year: '2010',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH&psig=AOvVaw1pRtTlqPjg9ioMy8p0b8_G&ust=1735542202662000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCPDnqtW0zIoDFQAAAAAdAAAAABAE',
    description: 'A mind-bending thriller about dreams within dreams.',
  },
  {
    id: '2',
    title: 'The Matrix',
    year: '1999',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fcinemags.org%2Fsekuel-m3gan-yang-berjudul-m3gan-2-0-akan-rilis-tahun-2025%2F&psig=AOvVaw2vadUH0tApO9ACvCp2cUQh&ust=1735542358174000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCICfoqC1zIoDFQAAAAAdAAAAABAE',
    description: 'A hacker discovers the reality he lives in is a simulation.',
  },
  {
    id: '3',
    title: 'Interstellar',
    year: '2014',
    image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fencrypted-tbn0.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg&psig=AOvVaw1gqa-bkMH7-CpJ-vrM-Xgo&ust=1735542105539000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIjCwae0zIoDFQAAAAAdAAAAABAE',
    description: 'A journey through space and time to save humanity.',
  },
];

export default function MovieListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            year={item.year}
            image={item.image}
            onPress={() =>
              navigation.navigate('Movie Details', { movie: item })
            }
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: 10,
  },
});

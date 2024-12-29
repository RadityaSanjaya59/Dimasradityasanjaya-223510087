import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MovieListScreen from '../screens/MovieListScreen';
import MovieDetailScreen from '../screens/MovieDetailScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen name="Movies" component={MovieListScreen} />
      <Stack.Screen name="Movie Details" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}

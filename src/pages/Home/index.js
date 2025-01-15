import { useFocusEffect } from '@react-navigation/native';
import { useState } from 'react';
import { Text, View } from 'react-native';
import { supabase } from '../../services/database';

export default function Home() {
  const [products, setProducts] = useState([]);

  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { supabase } from '../../services/database';
import ListProducts from '../../components/ListProducts';

export default function Home() {
  const [products, setProducts] = useState([]);

  useFocusEffect(
    useCallback(() => {
      let isActive = true;
      async function getProducts() {
        try {
          const { data, error } = await supabase.from('products').select('*');
          if (isActive) {
            setProducts(data);
          }
        } catch (error) {
          console.log(error);
        }
      }

      getProducts();

      return () => {
        isActive = false;
      };
    }, []),
  );

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={(product) => String(product.id)}
        renderItem={({ product }) => <ListProducts />}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
}

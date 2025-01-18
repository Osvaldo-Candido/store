import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useContext, useState } from 'react';
import { FlatList, Text, View } from 'react-native';
import { supabase } from '../../services/database';
import { Container, FlatListProducts } from './styles';
import ListProducts from '../../components/ListProducts';
import Header from '../../components/Header';
import { ProductContext } from '../../context/products';

export default function Home() {
  const [products, setProducts] = useState([]);
  const { addProductInCart } = useContext(ProductContext);

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

  const singlePage = (product) => {};

  function addCart(product) {
    if (!product) {
      console.log('Seleccione correctamente o produto');
      return;
    }

    addProductInCart(product);
  }

  return (
    <Container>
      <Header />
      <FlatListProducts
        data={products}
        keyExtractor={(product) => String(product.id)}
        renderItem={({ item }) => (
          <ListProducts
            addCart={() => addCart(item)}
            data={item}
            single={() => singlePage(item)}
          />
        )}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </Container>
  );
}

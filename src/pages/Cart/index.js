import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import { ProductContext } from '../../context/products';
import { Container, FlatListCart } from './styles';
import ListCart from '../../components/ListCart';
import FooterCartList from '../../components/FooterCartList';

export default function Cart() {
  const { cart, addProductInCart, removeProductInCart, total } =
    useContext(ProductContext);
  return (
    <Container>
      <FlatListCart
        data={cart}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ListCart
            data={item}
            addCart={() => addProductInCart(item)}
            removeCart={() => removeProductInCart(item)}
          />
        )}
      />
      <FooterCartList total={total} />
    </Container>
  );
}

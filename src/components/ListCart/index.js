import { Text } from 'react-native';
import {
  Container,
  ProductContainer,
  ImageProduct,
  DetailsContainer,
  PriceProduct,
  NameProduct,
  ActionsContainer,
  ButtonAddCart,
  TextButtonAdd,
  TextAmount,
} from './styles';
import { useState } from 'react';

export default function ListCart({ data, addCart, removeCart }) {
  const [amount, setAmount] = useState(data?.amount);

  function handleAddCart() {
    setAmount((item) => item + 1);
    addCart();
  }

  function handleRemoveCart() {
    if (amount === 0) {
      setAmount(0);
      return;
    }
    removeCart();
  }

  return (
    <Container>
      <ProductContainer>
        <ImageProduct source={{ uri: data?.image }} />
        <DetailsContainer>
          <PriceProduct>
            <Text style={{ fontSize: 15, margin: 0, padding: 0 }}>AOA</Text>
            {data?.price}
          </PriceProduct>
          <NameProduct>{data?.name}</NameProduct>
          <ActionsContainer>
            <ButtonAddCart onPress={() => handleRemoveCart()}>
              <TextButtonAdd>-</TextButtonAdd>
            </ButtonAddCart>
            <TextAmount>{data?.amount}</TextAmount>
            <ButtonAddCart onPress={() => handleAddCart()}>
              <TextButtonAdd>+</TextButtonAdd>
            </ButtonAddCart>
          </ActionsContainer>
        </DetailsContainer>
      </ProductContainer>
    </Container>
  );
}

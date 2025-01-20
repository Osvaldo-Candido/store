import {
  Container,
  ButtonCart,
  ContainerDescription,
  Description,
  DetailsContainer,
  ImageProduct,
  NameAndPriceCartContainer,
  NameAndPriceContainer,
  ProductName,
  ProductPrice,
  TitleDescription,
  RaiterContainer,
  BtnRate,
} from './styles';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/database';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Text } from 'react-native';

export default function SinglePage() {
  const [product, setProduct] = useState(null);
  const [rate, setRate] = useState(0);
  const route = useRoute();
  const { id } = route.params;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('id', id)
          .single();

        if (error) {
          throw error;
        }

        setProduct(data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchProduct();
  }, [id]);

  function handleRate(index) {
    setRate(index);
  }

  return (
    <Container>
      <ImageProduct
        source={{ uri: product?.image }}
        width={'100%'}
        height={220}
      />

      <DetailsContainer>
        <NameAndPriceCartContainer>
          <NameAndPriceContainer>
            <ProductPrice>
              <Text
                style={{
                  fontSize: 15,
                  margin: 0,
                  padding: 0,
                  fontWeight: 'regular',
                }}
              >
                AOA
              </Text>
              {product?.price}
            </ProductPrice>
            <ProductName>{product?.name}</ProductName>
          </NameAndPriceContainer>
          <ButtonCart>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'regular',
              }}
            >
              Adicionar ao carrinho
            </Text>
            <MaterialIcons
              name="add-shopping-cart"
              size={28}
              color={'#DB4747'}
            />
          </ButtonCart>
        </NameAndPriceCartContainer>
        <RaiterContainer>
          {[1, 2, 3, 4, 5].map((item, index) => (
            <BtnRate key={item} onPress={() => handleRate(item)}>
              <MaterialIcons
                name={rate >= item ? 'star' : 'star-outline'}
                size={24}
                color="#222"
              />
            </BtnRate>
          ))}
        </RaiterContainer>
        <ContainerDescription>
          <TitleDescription>Descrição</TitleDescription>
          <Description>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Description>
        </ContainerDescription>
      </DetailsContainer>
    </Container>
  );
}

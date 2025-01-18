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
} from './styles';
import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { supabase } from '../../services/database';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function SinglePage() {
  const [product, setProduct] = useState(null);
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
        console.log(data);
      } catch (error) {
        console.error('error', error);
      }
    };

    fetchProduct();
  }, [id]);

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
            <ProductPrice>{product?.price}</ProductPrice>
            <ProductName>{product?.name}</ProductName>
          </NameAndPriceContainer>
          <ButtonCart>
            <MaterialIcons
              name="add-shopping-cart"
              size={28}
              color={'#DB4747'}
            />
          </ButtonCart>
        </NameAndPriceCartContainer>

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

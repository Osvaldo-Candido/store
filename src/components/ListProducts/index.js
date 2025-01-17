import { Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import {
  Container,
  ProductImage,
  ProductName,
  ProductPrice,
  ContainerProduct,
  ContainerDetailes,
  ContainerNameAndPrice,
  ButtonAddCart,
} from './styles';

export default function ListProducts({ data }) {
  return (
    <Container>
      <ContainerProduct>
        <ProductImage source={{ uri: data?.image }} />
        <ContainerDetailes>
          <ContainerNameAndPrice>
            <ProductPrice>
              <Text style={{ fontSize: 15, margin: 0, padding: 0 }}>AOA</Text>{' '}
              {data?.price}{' '}
            </ProductPrice>
            <ProductName>{data?.name}</ProductName>
          </ContainerNameAndPrice>
          <ButtonAddCart>
            <MaterialIcons
              name="add-shopping-cart"
              size={28}
              color={'#DB4747'}
            />
          </ButtonAddCart>
        </ContainerDetailes>
      </ContainerProduct>
    </Container>
  );
}

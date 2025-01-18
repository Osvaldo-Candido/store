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
  ButtonDescription,
} from './styles';
import { useNavigation } from '@react-navigation/native';

export default function ListProducts({ data, addCart, single }) {
  const navigation = useNavigation();

  return (
    <Container>
      <ContainerProduct>
        <ButtonDescription
          onPress={() => navigation.navigate('SingleProduct', { id: data?.id })}
        >
          <ProductImage source={{ uri: data?.image }} />
        </ButtonDescription>

        <ContainerDetailes>
          <ContainerNameAndPrice>
            <ProductPrice>
              <Text
                style={{
                  fontSize: 15,
                  margin: 0,
                  padding: 0,
                  fontWeigh: 'regular',
                }}
              >
                AOA
              </Text>{' '}
              {data?.price}{' '}
            </ProductPrice>
            <ProductName>{data?.name}</ProductName>
          </ContainerNameAndPrice>
          <ButtonAddCart onPress={addCart}>
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

import { useNavigation } from '@react-navigation/native';
import {
  Container,
  ButtonCart,
  HeaderContainer,
  Input,
  SearchContainer,
  TextLogo,
  TextNumberProductsOfCart,
  IconContainer,
} from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useContext } from 'react';
import { ProductContext } from '../../context/products';

export default function Header() {
  const { cart } = useContext(ProductContext);
  const navigation = useNavigation();
  return (
    <Container>
      <HeaderContainer>
        <TextLogo>Lj</TextLogo>
        <SearchContainer>
          <Input placeholder="Procurar produto" />
          <MaterialIcons name="search" size={24} color={'#989ea6'} />
        </SearchContainer>
        <ButtonCart onPress={() => navigation.navigate('Cart')}>
          <IconContainer>
            <MaterialIcons
              name="shopping-cart-checkout"
              size={24}
              color={'#DB4747'}
            />
          </IconContainer>
          <TextNumberProductsOfCart>{cart.length}</TextNumberProductsOfCart>
        </ButtonCart>
      </HeaderContainer>
    </Container>
  );
}

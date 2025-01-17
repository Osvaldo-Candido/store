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

export default function Header() {
  return (
    <Container>
      <HeaderContainer>
        <TextLogo>Lj</TextLogo>
        <SearchContainer>
          <Input placeholder="Procurar produto" />
          <MaterialIcons name="search" size={24} color={'#989ea6'} />
        </SearchContainer>
        <ButtonCart>
          <IconContainer>
            <MaterialIcons
              name="shopping-cart-checkout"
              size={24}
              color={'#DB4747'}
            />
          </IconContainer>
          <TextNumberProductsOfCart>0</TextNumberProductsOfCart>
        </ButtonCart>
      </HeaderContainer>
    </Container>
  );
}

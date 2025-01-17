import { Text, View } from 'react-native';
import { Container, BtnBuy, TextBuy, TextTotal } from './styles';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
export default function FooterCartList({ total }) {
  return (
    <Container>
      <TextTotal>AOA {total.toFixed(2)}</TextTotal>
      <BtnBuy>
        <TextBuy>Finalizar Compra</TextBuy>
        <MaterialIcons name="shopping-bag" size={24} color={'#DB4747'} />
      </BtnBuy>
    </Container>
  );
}

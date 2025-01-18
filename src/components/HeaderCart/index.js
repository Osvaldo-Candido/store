import { Text, View } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Container, BtnBack, TextHeader } from './styles';
import { useNavigation } from '@react-navigation/native';
export default function HeadeCart() {
  const navigation = useNavigation();
  return (
    <Container>
      <BtnBack onPress={() => navigation.goBack()}>
        <MaterialIcons name="arrow-back" size={24} color="#222" />
      </BtnBack>
      <TextHeader>Carrinho seleccionado</TextHeader>
    </Container>
  );
}

import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
export const Container = styled(SafeAreaView)`
  padding: 5px;
`;
export const ImageProduct = styled.Image`
  width: 100%;
  height: 250px;
`;
export const DetailsContainer = styled.View``;
export const NameAndPriceCartContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
`;
export const NameAndPriceContainer = styled.View``;
export const ProductPrice = styled.Text`
  font-size: 25px;
  font-weight: bold;
`;
export const ProductName = styled.Text`
  font-size: 18px;
  max-width: 120px;
  color: #474d59;
  line-height: 24px;
`;
export const ButtonCart = styled.TouchableOpacity`
  flex-direction: row;
  gap: 5px;
  background-color: #f7d5d5;
  padding: 10px;
  border: 1px solid #f3c1c1;
  border-radius: 5px;
`;
export const ContainerDescription = styled.View``;
export const TitleDescription = styled.Text`
  font-size: 16px;
  max-width: 200px;
  color: #474d59;
  font-weight: bold;
`;
export const Description = styled.Text`
  font-size: 16px;
  color: #636973;
  line-height: 22px;
`;

export const RaiterContainer = styled.View`
  flex-direction: row;
`;
export const BtnRate = styled.TouchableOpacity``;

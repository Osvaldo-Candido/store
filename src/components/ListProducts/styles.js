import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  flex: 1;
  padding: 5px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  display: block;
  height: 200px;
`;
export const ProductName = styled.Text`
  font-size: 13px;
  max-width: 120px;
  color: #474d59;
`;
export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const ContainerProduct = styled.View``;
export const ContainerDetailes = styled.View`
  padding: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ButtonAddCart = styled.TouchableOpacity`
  background-color: #f7d5d5;
  border-radius: 50%;
  padding: 10px;
  border: 1px solid #f3c1c1;
`;
export const ButtonDescription = styled.TouchableOpacity``;
export const ContainerNameAndPrice = styled.View``;

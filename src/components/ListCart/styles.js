import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fafbfc;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
  elevation: 3;
`;
export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
export const ImageProduct = styled.Image`
  width: 200px;
  display: block;
  height: 180px;
`;
export const DetailsContainer = styled.View`
  margin-left: 15px;
`;
export const PriceProduct = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;
export const NameProduct = styled.Text`
  font-size: 13px;
  max-width: 120px;
  color: #474d59;
`;
export const ActionsContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 15px;
`;
export const ButtonAddCart = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  background-color: #f7d5d5;
  border-radius: 50%;
  border: 1px solid #f3c1c1;
  justify-content: center;
  align-items: center;
`;
export const TextButtonAdd = styled.Text`
  font-size: 18px;
`;

export const TextAmount = styled.Text`
  font-size: 18px;
  padding: 0 10px;
`;
